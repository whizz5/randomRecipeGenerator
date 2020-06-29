import React from "react";
import { Star, StarFill } from "react-bootstrap-icons";

const Rating = (props) => {
  const randomNumber = Math.floor(Math.random() * 5) + 1; //generates random number 1-5
  const starArray = [];

  for (let i = 0; i <  randomNumber; i++) {
    starArray.push(<StarFill className="text-warning" size={30} />);
  }

  while (starArray.length < 5) { //adds empty stars to array until there's 5 in total
    starArray.push(<Star className="text-warning" size={30} />);
  }
 
  return <div className="d-flex align-items-center">{starArray}</div>;
};

export default Rating;
