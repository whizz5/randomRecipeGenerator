import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IngredientWidget from "../IngredientWidget/IngredientWidget";

const IngredientsCard = (props) => {
  let stepsObj = props.recipeInfo.analyzedInstructions[0].steps;
  console.log("steps", props.recipeInfo.analyzedInstructions[0].steps);

  const ingredientsArray = [];
  for (const step in stepsObj) {
    //    console.log('ingredients objects', stepsObj[step].ingredients);

    for (const ingredientEntry in stepsObj[step].ingredients) {
      //    console.log('ingredient name:',stepsObj[step].ingredients[ingredientEntry].name)
      //    console.log('ingredient pic:',stepsObj[step].ingredients[ingredientEntry].image)

      ingredientsArray.push({
        name: stepsObj[step].ingredients[ingredientEntry].name,
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/" +
          stepsObj[step].ingredients[ingredientEntry].image,
      });
    }
  }

  console.log("ingredientsArray: ", ingredientsArray);

  let checkedIngredients = {}; //creates blank object
  let cleanedIngredientsArray = ingredientsArray.filter(
    //filters existing array
    (ingredient) =>
      !checkedIngredients.hasOwnProperty(ingredient.image) &&
      (checkedIngredients[ingredient.image] = true) //checks if object doesnt contain current ingredient image (image could be the same despite different names) and then adds it to the object
  );
  console.log("cleanedIngredientsArray: ", cleanedIngredientsArray);

  let amountOfRows = Math.ceil(cleanedIngredientsArray.length / 3); //calcs amount of rows depending on size of array
  let rowsTemplateArray = [...Array(amountOfRows)]; //initiliases blank array with N amount of elements

  //extracting chunks of 3 from ingredients array, storing them in rows as arrays
  //   [1,2,3,4,5,6,7,8,9] => [ [1, 2, 3], [4,5,6 ], [7,8,9] ]
  let rowsArray = rowsTemplateArray.map((row, index) =>
    cleanedIngredientsArray.slice(index * 3, index * 3 + 3)
  );

  //Forming a <Row> for every row in the array
  //Within each <Row>, placing a <Col> around each element
  // [ [1, 2, 3], [4,5,6 ], [7,8,9] ] => [[Row],[Row],[Row]]
  //                                     [[Col],[Col],[Col]] = [Row]

  let content = rowsArray.map((row, index) => (
    <Row key={index} className="align-items-end d-flex my-3">
      {row.map((ingredient) => (
        <Col>
          <IngredientWidget name={ingredient.name} image={ingredient.image} />
        </Col>
      ))}
    </Row>
  ));

  return <Container>{content}</Container>;
};

export default IngredientsCard;
