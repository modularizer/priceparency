let site = 'https://www.pavilions.com';

//___________________________________________________ STYLES ___________________________________________________________
function makeImgOverlay(){
    let div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = '10px';
    div.style.right = '10px';
    div.style.color = 'white';
    div.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    div.style.padding = '5px 10px';
    div.style.fontSize = '14px';
    div.style.borderRadius = '5px';
    return div;
}

function fillImgOverlay(prices, servings, items){
    // show a div with the prices and quantities
    let div = document.createElement('div');
    let pps = document.createElement('div');
    let main = document.createElement('div');
    let staples = document.createElement('div');

    pps.innerText = '$' + (prices.main / servings).toFixed(2) + ' x' + servings;
    main.innerText = '$' + prices.main.toFixed(2) + ' (' + items.main.length + ')';
    staples.innerText = '$' + prices.staples.toFixed(2) + ' (' + items.staples.length + ')';
    main.style.fontSize = '10px';
    pps.style.fontSize = '20px';
    staples.style.fontSize = '10px';
    staples.style.fontColor = 'gray';
    div.appendChild(pps);
    div.appendChild(main);
    div.appendChild(staples);
    return div;
}

//___________________________________________________ FETCH ___________________________________________________________

function parseRecipe(d){
    let u = `${site}meal-plans-recipes/shop/${d}`;
    return fetch(u).then(r => r.text()).then(t => {
        t = t.split('<script id="__NEXT_DATA__" type="application/json">')[1].split('</script>')[0];
        let r = JSON.parse(t);
        let p = r.props.pageProps;
        let servings = p.recipe.yield.servings;
        let items = {
            'main': [],
            'staples': [],
            'optional': [],
            'all': [],
        };
        let prices = {
            'main': 0,
            'staples': 0,
            'optional': 0,
            'all': 0,
        };
        p.shopItems.map(i => {
            let s = i.selection || {};
            let x = s.product || {};
            x['quantity'] = (s.neededAmount || 0) * 1;
            x['totalPrice'] = (x.quantity * x.price) / 100;

            if (i.isStaple){
                items.staples.push(x);
                prices.staples += x.totalPrice;
            }else if (i.isOptional){
                items.optional.push(x);
                prices.optional += x.totalPrice;
            }else{
                items.main.push(x);
                prices.main += x.totalPrice;
            }
            items.all.push(x);
            prices.all += x.totalPrice;
        });

        return {prices, servings, items, r};
    });
}

//___________________________________________________ MAIN ___________________________________________________________
function calcPrice(d){
    return parseRecipe(d).then(d => {
        return fillImgOverlay(d.prices, d.servings, d.items);
    });
}

function showRecipePrice(a){
    if (a.href.startsWith(`${site}/meal-plans-recipes/shop/`)){
        let d = a.href.split('/').pop().split('?')[0] * 1;
        let span = a.children[0];
        if (!span){
            return;
        }
        let div = makeImgOverlay();
        div.innerText = '' + d;
        calcPrice(d).then(d => {
            div.innerHTML = d.outerHTML;
        });
        span.appendChild(div);
    }else{
        console.warn('not a valid link', a.href);
    }
}


function showAllRecipePrices(){
    document.querySelectorAll('a').forEach(a => showRecipePrice(a));
}

showAllRecipePrices();

