import React from "react";

const Scissors = props => {
  return (
    <div
      onClick={() => props.onSelect("scissors")}
      className="cta-choice scissors"
    >
      <img src="images/icon-scissors.svg" alt="scissors-icon" />
    </div>
  );
};

export default Scissors;
