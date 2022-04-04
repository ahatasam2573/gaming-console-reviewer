import React from "react";
import "./Home.css";

const Home = () => {
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
      <div className="customer-review-container">
        <h2>Customer Reviews</h2>
      </div>
    </div>
  );
};

export default Home;
