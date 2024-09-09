# Priceparency
Pavilions Price Transparency Project

Goal is to show the price of Pavilions recipes in a browsable way.


## How to run the project
Right now, the project source code javascript needs to be run while on the Pavilions website.
Eventually there may be a bookmark.

### 1. Setup - Add a bookmark
1. Navigate to Bookmarks Manager `Ctrl+Shift+O`
2. Click options menu on top right of screen and select "Add New Bookmark"
3. Add bookwark with the url as:
```
javascript:fetch('https://raw.githubusercontent.com/modularizer/priceparency/master/priceparency.js').then(r=>r.text()).then(t=>eval(t))
```

### 2. Use
1. Go to [https://www.pavilions.com/recipes](https://www.pavilions.com/recipes) or one of the subcategory recipe pages, e.g. [https://www.pavilions.com/recipes/diet/flexitarian](https://www.pavilions.com/recipes/diet/flexitarian)
2. Click the bookmark, and price overlays should appear, so you don't have to click each individual recipe to see how much it costs

![image](https://github.com/user-attachments/assets/a2c3c0ed-e069-4b64-94f6-7e4b18c954ba)



