import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Clock, People, Wallet2 } from "react-bootstrap-icons";

const Widget = (props) => {
  let information = {};

  switch (props.type) {
    case "time":
      information.heading = "Time";
      information.data = props.cookingTime;
      information.icon = <Clock />;
      break;
    case "servings":
      information.heading = "People";
      information.data = props.people;
      information.icon = <People />;
      break;
    case "price":
      information.heading = "£/Person";
      information.data = ((props.price)/100).toFixed(2);
      information.icon = <Wallet2 />;

      break;

    default:
      console.log("You have reached a dead end");
  }

  return (
    <Container>
      <Row>
        <Col>{information.icon}</Col>
        <Col>
          <Row>{information.heading}</Row>
          <Row>{information.data}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Widget;
