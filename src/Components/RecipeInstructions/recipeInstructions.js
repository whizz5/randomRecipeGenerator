import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import stripHtml from "string-strip-html";
import IngredientsCard from "../IngredientsCard/IngredientsCard";

const recipeInstructions = (props) => {
  return (
    <Container className="m-5 px-5 bg-white funkyCorners">
      <Row className="pt-3">
        <Col>
        <h2  className="m-2  text-center text-warning">Ingredients</h2>
          {props ? <IngredientsCard  recipeInfo={props.recipeInfo} /> : null}
        </Col>

        <Col>
          <h2 className="m-2 text-center text-warning">Method</h2>
          <p>{stripHtml(props.recipeInfo.instructions)}</p>
          <Row className="justify-content-center mb-3">
          <Button onClick={props.clicked} className=" btn-warning text-light"> Overview </Button>
        </Row>
        </Col>
  
      </Row>
    </Container>
  );
};

export default recipeInstructions;
