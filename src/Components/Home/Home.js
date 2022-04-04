import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReview";
import ReviewPerson from "../ReviewPerson/ReviewPerson";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const sliceReviews = reviews.slice(0, 3);

  const navigate = useNavigate();
  const goToReviewPage = () => {
    const path = `/reviews`;
    navigate(path);
  };

  return (
    <div className="main-container">
      <div className="content-container">
        <div className="review-container">
          <h1 className="heading-title">
            Keep Calm And <br /> Play With Gaming Console
          </h1>
          <h3 className="title">Sony Play Station 5</h3>
          <p>
            The PS5™ console unleashes new gaming possibilities that you never
            anticipated. Experience lightning fast loading with an ultra-high
            speed SSD, deeper immersion with support for haptic feedback,
            adaptive triggers, and 3D Audio*, and an all-new generation of
            incredible PlayStation® games.
          </p>
          <button className="btn-buy">
            <a
              href="https://direct.playstation.com/en-us/consoles/console/playstation5-console.3006646"
              target="_blank"
              rel="noreferrer"
            >
              <span className="btn-title">Buy Now</span>
            </a>
          </button>
        </div>
        <div className="img-container">
          <img src="./playStation.jpg" alt="" />
        </div>
      </div>
      <h2 className="review-title">Customer Reviews ({sliceReviews.length})</h2>
      <div className="customer-review-container">
        {
          sliceReviews.map(review => <ReviewPerson key={review.id} review={review}></ReviewPerson>)
        }
      </div>
      <button onClick={() => goToReviewPage()} className="btn-review"><span className="btn-title">See More</span></button>
    </div>
  );
};

export default Home;
