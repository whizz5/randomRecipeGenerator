import React from "react";
import SummaryPanel from "../SummaryPanel/SummaryPanel";
import Widget from "../Widget/Widget";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Rating from '../Rating/Rating'

const RecipeCard = (props) => {
  console.log(props);
  return (
    <Container className="m-3  funkyCorners">
      <Row className="h-100 ">
        <Col sm={6} className="p-0 ">
          <img
            className="m-0 p-0 img-fluid recipePic"
            src={props.recipeInfo.image}
            alt=""
          />
        </Col>
        <Col sm={6} className="p-5 bg-white ">
          <Row className="m-2 d-flex justify-content-center">
            <h1 className=" text-center p-2">
              {props.recipeInfo.title}
            </h1>
  
          </Row>
          <Row className="m-2 d-flex justify-content-center">
          <h3 className="d-flex"> Rating: <Rating/> </h3>
          </Row>

          <Row className="mb-4">
            <Col>
              <Widget
                type="time"
                cookingTime={props.recipeInfo.readyInMinutes}
              />
            </Col>
            <Col>
              <Widget type="servings" people={props.recipeInfo.servings} />
            </Col>
            <Col>
              <Widget type="price" price={props.recipeInfo.pricePerServing} />
            </Col>
          </Row>

          <SummaryPanel summary={props.recipeInfo.summary} />
          <div className="d-flex justify-content-center"><Button onClick={props.clicked} className=" btn-warning text-light">View Recipe</Button></div>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeCard;
