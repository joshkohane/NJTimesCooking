![NJTimes Cooking Logo](https://github.com/joshkohane/NJTimesCooking/blob/master/app/assets/images/logo_screenshot2.png)

# NJTimes Cooking

[NJTimes Cooking](https://njtimescooking.herokuapp.com/?#/") is a clone of [NYTimes Cooking](https://cooking.nytimes.com/"), a site affiliated with the New York Times. NJTimes Cooking features recipes native to New Jersey (like its creator). This version has many of the same features, including a Home Page with links to suggested recipes, a recipe page for each recipe complete with directions and ingredients, a recipe box where a user can save their favorite recipes to keep them in one convenient place, and a search bar to look through all the various offerings. 


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


Each recipe on the site has its own show page. Show pages include all the information you could need about the recipe, including a picture, the time and yield, and directions and ingredients.


![NJTimes Recipe Page](https://github.com/joshkohane/NJTimesCooking/blob/master/app/assets/images/recipe_page_screenshot.png)


At the bottom of each recipe page, there is a section for comments. Comments are listed by their time of creation and the first name of the user that created them. There is also a form that allows for new comment creation, and a button for a user to remove any of their own comments, if they feel they need to.


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


## Search


The nav bar contains a search feature allowing a user to search for recipes on the site. Each matching result shows up as an option below the nav bar, containing a link to a recipe page:


![NJTimes_Search](https://github.com/joshkohane/NJTimesCooking/blob/master/app/assets/images/search_screenshot.png)


For this functionality, I used ActiveRecord to query the database. From the frontend, I implemented an ajax call the specify the query search. On submit of the search, the search results are pushed the localStorage and used to display each search result on a new page. Initially, I tied the search results page to the search slice of state. This seemed like the right idea at first, however, every new input into the search bar updated the results page. Because I wanted the results to remain the same as the first submit, I decided the best way to keep results consistent was to use localStorage.


```javascript
    handleSubmit(e) {
        let thisSearch = [];
        Object.values(this.props.searches).forEach((search => thisSearch.push(search)));
        localStorage.setItem('theseSearches', JSON.stringify(thisSearch))
        this.setState({inputValue: ""})
        this.props.clearSearch();
    } 
```


```javascript
    constructor(props) {
        super(props)
        this.state = {
            searches: JSON.parse(localStorage.getItem('theseSearches')),
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.clearSearch();
            this.setState({ searches: JSON.parse(localStorage.getItem('theseSearches'))});
            window.scrollTo(0, 0);
        }
    }
```


## Additional Resources
Special thanks to the artists and creators who's images and fonts I used in this project:

Polina Tankilevitch, Lum3n, Ponya Sakana, Jhon Marquez, Karolina Grabowska, Angele J, Amirali Mirhashemian, Andy Hay, Claudi Pantoni, Ali Nafezarefi, Dilyara Garifullina, Mali Maeder, Katerina Jerabkova, Roberto Valdivia, Marta Dzedyshko, Daria Nepriakhina, Manuel Cortina, Jonathan Pielmayer, Atharva Tulsi, Syed F Hashemi, Frances Coronel
