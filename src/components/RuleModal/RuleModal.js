import React from "react";

const RuleModal = props => {
  console.log(props.showModal);
  return (
    <React.Fragment>
      <div className={props.showModal ? "backdrop show" : "backdrop"}>
        <div className="modal">
          <img className="rules-img" src="images/image-rules.svg" alt="Rules" />
          <img
            onClick={props.modalToggle}
            className="close-icon"
            src="images/icon-close.svg"
            alt="close"
          />
        </div>
      </div>

      <div onClick={props.modalToggle} className="rules">
        Rules
      </div>
    </React.Fragment>
  );
};

export default RuleModal;
