import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeOverview from "./Components/RecipeOverview/RecipeOverview";
import RecipeInstructions from "./Components/RecipeInstructions/recipeInstructions";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";

class App extends React.Component {
  state = {
    loading: true,
    showInstructions: false,
    recipe: {},
    
  };

 
  
  componentDidMount() {
    axios({
      method: "GET",
      url:
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        useQueryString: true,
      },
      params: {
        number: "1",
        tags: "dinner",
      },
    })
      .then((response) => {
        this.setState({
          loading: false,
          recipe: response.data.recipes[0],
        });
        console.log(this.state.recipe);
        
        console.log('process.env.REACT_APP_API_KEY: ', process.env.REACT_APP_API_KEY);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  clickHandler = (event) => {
    console.log("click handler reached");

    this.setState(prevState=>({
      showInstructions: !prevState.showInstructions
    }))
  };


  

  render() {
    return (
      <div className="App d-flex p-5 h-100 justify-content-center ">
        {!this.state.loading ? (
          !this.state.showInstructions ? (
            <RecipeOverview
              clicked={this.clickHandler}
              recipeInfo={this.state.recipe} 
            />
          ) : (
            <RecipeInstructions  clicked={this.clickHandler} recipeInfo={this.state.recipe} />
          )
        ) : (
          <h1>LOADING</h1>
        )}
     
      </div>
    );
  }
}

export default App;

/* Inspired by the following:

https://dribbble.com/shots/5428106-DailyUi-040-Recipe
https://dribbble.com/shots/4521528-Recipe-card
https://dribbble.com/shots/3904726-The-Crooked-Cauldron

*/
