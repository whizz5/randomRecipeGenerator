import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const IngredientWidget = (props) => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <img className="img-fluid" src={props.image} alt={props.name} />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">{props.name}</Col>
      </Row>
    </Container>
  );
};

export default IngredientWidget;
