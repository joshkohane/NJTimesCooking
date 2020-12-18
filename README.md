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
The landing page of NJTimes Cooking features a splash with a recommended recipe, a nav bar with search functionality and login and logout buttons. The login and signup features are presented as a modal, allowing a user to flip between the two forms. Conveniently, there is also a demo user button that allows a visitor to access the page as me, Josh, the creator.

![NJTimes Modal](https://github.com/joshkohane/NJTimesCooking/blob/master/app/assets/images/modal_screenshot.png)


The home page also includes lists of recipes presented as recipe cards, each with a link to another recipe page. For this, I implemented a carousel feature that scrolls on click:

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

## Recipe Page

Each recipe on the site has their own show page. Show pages include all the information you could need about the recipe, including a picture, the time and yield, and directions and ingredients.

![NJTimes Recipe Page](https://github.com/joshkohane/NJTimesCooking/blob/master/app/assets/images/recipe_page_screenshot.png)

At the bottom of each recipe page, there is a section for comments. Comments are listed by their time of creation and the first name of the user that created them. The is a form that allows for new comment creation, and a button for a user to remove any of their own comments if they feel they need to.

## Recipe Box

Another exciting CRUD feature of the site is the Recipe Box component. The recipe box is individual to each user. A user can save a recipe, either on each recipe card or on the recipe page itself. Once saved, each recipe card will appear in the recipe box, link located in the nav bar. Recipes can also be removed from the recipe box using the bookmark icon on the recipe cards or using the icon on the recipe page.

![NJTimes Recipe Box](https://github.com/joshkohane/NJTimesCooking/blob/master/app/assets/images/saved_screenshot.png)

```javascript

    handleSave(recipe) {
        if (recipe.saveId) {
            this.toggleModal();
        } else {
            this.props.saveThisRecipe(recipe.id);
        }
    }

    toggleModal() {
        let newName = (this.state.className === "modal-save-background") ? "modal-save-background-closed" : "modal-save-background"
        this.setState({ className: newName })
    }

    clickEvent(recipe) {
        this.props.deleteThisSave(recipe.saveId);
        this.toggleModal();
    }
   
```

![NJTimes_Search](https://github.com/joshkohane/NJTimesCooking/blob/master/app/assets/images/search_screenshot.png)


