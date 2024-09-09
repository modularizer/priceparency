# Priceparency
Pavilions Price Transparency Project

Goal is to show the price of Pavilions recipes in a browsable way.


## How to run the project
Right now, the project source code needs to be run in the developer console while on the Pavilions website.
To come, there will be a way to click a bookmarklet to run the code, and maybe even a browser extension.

 ### Using Address Bar
 As a security measure Chrome will not let you paste a string starting with "javascript:" so that people don't unintentionally execute code. Therefore, do the following
 
1. type the letter **`j`**
2.  then paste the following:

```
avascript:fetch('https://raw.githubusercontent.com/modularizer/priceparency/master/priceparency.js').then(r=>r.text()).then(t=>eval(t))
```

3. Press `Enter`
		
###  Using Developer Console
1.  Open the developer console `Ctrl+Shift+i` in Google Chrome or Microsoft Edge
2. Click on the `Console` tab if not already selected
3. Paste the following:
```
fetch('https://raw.githubusercontent.com/modularizer/priceparency/master/priceparency.js').then(r=>r.text()).then(t=>eval(t))
```
4. Press `Enter`

### Using Bookmarks Bar
1. Navigate to Bookmarks Manager `Ctrl+Shift+O`
2. Click options menu on top right of screen and select "Add New Bookmark"
3. Add bookwark with the url as:
```
javascript:fetch('https://raw.githubusercontent.com/modularizer/priceparency/master/priceparency.js').then(r=>r.text()).then(t=>eval(t))
```

4. Click this bookmark to bypass soft paywalls