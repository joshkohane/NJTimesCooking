![NJTimes Cooking Logo](https://github.com/joshkohane/NJTimesCooking/blob/master/app/assets/images/logo_screenshot2.png)

# NJTimes Cooking

[NJTimes Cooking](https://njtimescooking.herokuapp.com/?#/") is a clone of [NYTimes Cooking](https://cooking.nytimes.com/"), a site connected to the New York Times. NJTimes features recipes native to New Jersey (like it's creator). This version has many of the same features, including a Home Page with links to suggested recipes, a recipe page for each recipe, complete with directions and ingredients, a recipe box where a user can save their favorite recipes to keep them in one convenient place, and a search bar to look through all the various offerings. 

## Technologies
NJTimes Cooking was built using:
1. Ruby on Rails
2. Javascript
3. React
4. Redux
5. PostgreSQL

## Home Page
The landing page of NJTimes Cooking features a splash with a recommended recipe, a nav bar with search functionality and log in and log out buttons. It also includes lists of recipes presented as recipe cards, each with a link to another recipe page. For this, I implemented a carousel feature that scrolls on click:

![NJTimes Carousel](https://github.com/joshkohane/NJTimesCooking/blob/master/app/assets/images/carousel_screenshot.png)

I achieved this using onClick actions in my component that shifts the position in CSS. This allows a user to scroll right or left to browse the offerings of the site. At the end of each carousel is a "See All Recipes" button that links to an index page of every recipe on the site.

```javascript
    moveTopCarouselLeft(e) {
        e.preventDefault();
        let currentPosition = this.state.topLeft
        let currentIdx = this.state.topIdx
        this.setState({ topLeft: currentPosition - 764, topIdx: currentIdx + 4 })
    }

    moveTopCarouselRight(e) {
        e.preventDefault();
        let currentPosition = this.state.topLeft
        let currentIdx = this.state.topIdx
        this.setState({ topLeft: currentPosition + 764, topIdx: currentIdx - 4 })
    }
```





![NJTimes Recipe Page](https://github.com/joshkohane/NJTimesCooking/blob/master/app/assets/images/recipe_page_screenshot.png)
![NJTimes Recipe Box](https://github.com/joshkohane/NJTimesCooking/blob/master/app/assets/images/saved_screenshot.png)


