import React from "react";
import useReviews from "../../hooks/useReview";
import ReviewPerson from "../ReviewPerson/ReviewPerson";
import "./Review.css"
const Review = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <h1 className="review-title">Look What our customer say!!!</h1>
      <div className="review-containers">
        {
          reviews.map((review) => (
            <ReviewPerson key={review.id} review={review}></ReviewPerson>
          ))
        }
      </div>
    </div>
  );
};

export default Review;
