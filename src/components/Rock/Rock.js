import React from "react";

const Rock = props => {
  return (
    <div onClick={() => props.onSelect("rock")} className="cta-choice  stone">
      <img src="images/icon-rock.svg" alt="rock-icon" />
    </div>
  );
};

export default Rock;
