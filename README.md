# Priceparency
Grocery Price Transparency Project

Goal is to show the price of [Albertsons Companies](https://www.albertsonscompanies.com/) recipes in a browsable way.

# What stores are supported?
* https://www.acmemarkets.com/recipes
* https://www.albertsons.com/recipes
* https://www.andronicos.com/recipes
* https://www.bakersplus.com/recipes
* https://www.carrsqc.com/recipes
* https://www.haggen.com/recipes
* https://www.jewelosco.com/recipes
* https://www.kingsfoodmarkets.com/recipes
* https://www.pavilions.com/recipes
* https://www.randalls.com/recipes
* https://www.safeway.com/recipes
* https://www.shaws.com/recipes
* https://www.smithsfoodanddrug.com/recipes
* https://www.starmarket.com/recipes
* https://www.tomthumb.com/recipes
* https://www.vons.com/recipes

## Quickstart
1. Clone the repo
2. [chrome://extensions/](chrome://extensions/) => Load Unpacked => Select the `priceparency` directory
3. Navigate to [pavilions.com/recipes](https://www.pavilions.com/recipes)

## What does it do?
Albertsons/Safeway/Vons/Pavilions/etc has recipes which are useful for shopping and you can click and add them to cart, but some features are suboptimal:
1. You have to click on each recipe to see the price
2. You can't sort or filter by price
3. You can't sort or filter by nutritional info, pans used, etc.

This project aims to solve these problems by:
- [x] When you enter the overview pages, it automatically fetches the more detailed info from each recipe and displays it in a more browsable way
- [x] Shows the price per serving
- [x] Shows the number of servings
- [x] Shows the total price
- [x] Shows the price of "staples" you probably have but may not

## To Do
- [ ] Add a "sort by price" feature
- [ ] Add a "filter by price" feature
- [ ] Add a "filter by nutritional info" feature
- [ ] Add a "filter by pans used" feature
- [ ] Combine all the recipes to one filterable overview page
- [ ] Make a "cart" where you can add/remove recipes (pavilions lets you add ingredients to your cart but removing the ingredients from one recipt is a pain)
- [ ] Add user-inputs for rating recipes, adding tags, etc.
- [ ] Add "favorites" feature
- [ ] Add "recently viewed" feature

<hr/>

## How to run the project
Basically, the contents of `priceparency.js` need to be run while you are on [pavilions.com/recipes](https://www.pavilions.com/recipes).

This can be done by:
1. Chrome Extension
2. Bookmarklet
3. Copy/Paste into the developer console

### Chrome Extension
2 options: `clone` + `load unpacked` or `download` + `load packed`

#### Option 1 - Clone + Load Unpacked (for developers with git installed)
1. Clone the repository 
```bash
git clone git@github.com:modularizer/priceparency.git
```
2. Open Chrome and navigate to `chrome://extensions/`
3. Click `Load unpacked` and select the `priceparency` directory

#### Option 2 - Download + Load Unpacked
1. Download the repository as a zip file (click the green `Code` button and select `Download ZIP`)
2. Unzip the file
3. Open Chrome and navigate to `chrome://extensions/`
4. Click `Load unpacked` and select the `priceparency` directory

<hr/>

### (legacy) as a bookmarklet
#### 1. Setup - Add a bookmark
1. Navigate to Bookmarks Manager `Ctrl+Shift+O`
2. Click options menu on top right of screen and select "Add New Bookmark"
3. Add bookwark with the url as:
```
javascript:fetch('https://raw.githubusercontent.com/modularizer/priceparency/master/priceparency.js').then(r=>r.text()).then(t=>eval(t))
```

#### 2. Use - [pavilions.com/recipes](pavilions.com/recipes) -> Click Bookmark
1. Go to [https://www.pavilions.com/recipes](https://www.pavilions.com/recipes) or one of the subcategory recipe pages, e.g. [https://www.pavilions.com/recipes/diet/flexitarian](https://www.pavilions.com/recipes/diet/flexitarian)
2. Click the bookmark, and price overlays should appear, so you don't have to click each individual recipe to see how much it costs

![image](https://github.com/user-attachments/assets/a2c3c0ed-e069-4b64-94f6-7e4b18c954ba)



