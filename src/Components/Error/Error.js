import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const backToHome = () => {
    const path = `/home`;
    navigate(path);
  };
  return (
    <div className="error-div">
      <button onClick={() => backToHome()} className="error-btn">
        Back to Home
      </button>
      <img src="./error.jpg" alt="" />
    </div>
  );
};

export default Error;
