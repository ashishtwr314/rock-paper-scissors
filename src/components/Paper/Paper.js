import React from "react";

const Paper = props => {
  return (
    <div onClick={() => props.onSelect("paper")} className="cta-choice paper">
      <img src="images/icon-paper.svg" alt="paper-icon" />
    </div>
  );
};

export default Paper;
