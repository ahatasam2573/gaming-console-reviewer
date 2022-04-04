import React from "react";
import "./ReviewPerson.css";

const ReviewPerson = ({ review }) => {
  const { name, description, picture, ratings } = review;
  return (
    <div className="review-person-container">
      <img className="reviewer" src={picture} alt="" />
      <h4>{name}</h4>
      <p><small>{description}</small></p>
      <p><small><span>Ratings:</span> {ratings}</small></p>
    </div>
  );
};

export default ReviewPerson;
