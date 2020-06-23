import React from "react";
import SummaryPanel from "../SummaryPanel/SummaryPanel";
import Widget from "../Widget/Widget";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from 'axios';


class RecipeCard extends React.Component {

  state={
    recipe: {}
  }

componentDidMount(){
  axios({
    "method":"GET",
    "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key":"cb28df3240msh38fe0281823b0d2p17d5aejsnb3dc3730b312",
    "useQueryString":true
    },"params":{
    "number":"1",
    "tags":"vegetarian%2Cdessert"
    }
    })
    .then((response)=>{
      this.setState({
        recipe: response.data.recipes[0]
        
      })
      console.log(this.state.recipe)
      
  
    })
    .catch((error)=>{
      console.log(error)
    })

}

  render(){
    
    return (
      <Container>
        <Row >
          <Col className="m-auto">
            <img src={this.state.recipe.image} alt=""/>
          </Col>
          <Col>
          <Row className="mb-4">
              <h1 className="mx-auto p-2">{this.state.recipe.title}</h1>
            </Row>
     
  
            <Row className="mb-4">
              <Col>
                <Widget type="time" cookingTime={this.state.recipe.readyInMinutes}/>
              </Col>
              <Col>
                <Widget type="servings" people={this.state.recipe.servings}/>
              </Col>
              <Col>
                <Widget type="price" price={this.state.recipe.pricePerServing}/>
              </Col>
          
            </Row>
  
            
            <SummaryPanel summary={this.state.recipe.summary}/>
            <Button>View Recipe</Button>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default RecipeCard;
