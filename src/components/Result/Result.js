import React, { Component } from "react";
import Rock from "../Rock/Rock";
import Paper from "../Paper/Paper";
import Scissors from "../Scissors/Scissors";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="result-container">
        <div className="choice your-choice">
          <h3 className="choice-text">YOU PICKED</h3>
          {this.props.yourSelection == "rock" ? (
            this.props.winner == "you" ? (
              <div className="ripple">
                <Rock />
              </div>
            ) : (
              <Rock />
            )
          ) : this.props.yourSelection == "paper" ? (
            this.props.winner == "you" ? (
              <div className="ripple">
                <Paper />
              </div>
            ) : (
              <Paper />
            )
          ) : this.props.winner == "you" ? (
            <div className="ripple">
              <Scissors />
            </div>
          ) : (
            <Scissors />
          )}
        </div>

        <div className="result">
          <h2 className="result_result-text">
            {this.props.winner == "you"
              ? "YOU WIN"
              : this.props.winner == "comp"
              ? "YOU LOSE"
              : "DRAW"}
          </h2>
          <button
            onClick={this.props.restartGame}
            className="result_play-btn"
            type="button"
          >
            PLAY AGAIN
          </button>
        </div>

        <div className="choice comp-choice">
          <h3 className="choice-text">THE HOUSE PICKED</h3>
          {this.props.computerSelection == "rock" ? (
            this.props.winner == "comp" ? (
              <div className="ripple">
                <Rock />
              </div>
            ) : (
              <Rock />
            )
          ) : this.props.computerSelection == "paper" ? (
            this.props.winner == "comp" ? (
              <div className="ripple">
                <Paper />
              </div>
            ) : (
              <Paper />
            )
          ) : this.props.winner == "comp" ? (
            <div className="ripple">
              <Scissors />
            </div>
          ) : (
            <Scissors />
          )}

          {/* <div className="cta-choice-placeholder"></div> */}
        </div>
      </div>
    );
  }
}

export default Result;
