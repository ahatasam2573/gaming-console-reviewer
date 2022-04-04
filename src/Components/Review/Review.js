import React from "react";
import useReviews from "../../hooks/useReview";

const Review = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <h1>This is review: {reviews.length}</h1>
    </div>
  );
};

export default Review;
