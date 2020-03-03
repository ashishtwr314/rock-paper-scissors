import React from "react";

const Logo = props => {
  return (
    <div className="logo-container">
      <div className="logo-img">
        <img src="images/logo.svg" alt="Logo" />
      </div>
      <div className="score-card">
        SCORE
        <p className="score">{props.score}</p>
      </div>
    </div>
  );
};

export default Logo;
