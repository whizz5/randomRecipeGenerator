import React from "react";
import { Star, StarFill } from "react-bootstrap-icons";

const Rating = (props) => {
  const randomNumber = Math.floor(Math.random() * 5) + 1; //generates random number 1-5
  console.log("randomNumber: ", randomNumber);

  const starArray = [];

  for (let i = 0; i < randomNumber; i++) {
    starArray.push(<StarFill className="text-warning" size={30} />);
  }

  if (starArray.length < 5) {
    console.log("starArray.length: ", starArray.length);

    for (let i = 0; i < 5 - starArray.length + 1; i++) {
      starArray.push(<Star className="text-warning" size={30} />);
    }
  }

  console.log("starArray: ", starArray);

  return <div className="d-flex align-items-center">{starArray}</div>;
};

export default Rating;
