import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Clock, People, Wallet2 } from "react-bootstrap-icons";

const Widget = (props) => {
  let information = {};

  switch (props.type) {
    case "time":
      information.heading = "Total time";
      information.data = props.cookingTime + " mins";
      information.icon = <Clock  size={30}/>;
      break;
    case "servings":
      information.heading = "People";
      information.data = props.people;
      information.icon = <People  size={30} />;
      break;
    case "price":
      information.heading = "£/Person";
      information.data = ((props.price)/100).toFixed(2);
      information.icon = <Wallet2  size={30} />;

      break;

    default:
      console.log("You have reached a dead end");
  }

  return (
    <Container>
      <Row className="d-flex align-items-center">
        <Col>{information.icon}</Col>
        <Col>
        
          <Row className="d-flex justify-content-center"><strong>{information.heading}</strong></Row>
          <Row className="d-flex justify-content-center text-warning"><strong>{information.data}</strong></Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Widget;
