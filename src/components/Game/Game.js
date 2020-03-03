import React, { Component } from "react";
import Rock from "../Rock/Rock";
import Paper from "../Paper/Paper";
import Scissors from "../Scissors/Scissors";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youSelected: "",
      computerSelected: "",
      selections: ["rock", "paper", "scissors"],
      winner: "comp"
    };
  }

  onSelect = async selection => {
    await this.setState({
      youSelected: selection
    });
    this.chooseWinner();
  };

  chooseWinner = async () => {
    const computerSelected = this.state.selections[
      Math.floor(Math.random() * 3)
    ];
    const youSelected = this.state.youSelected;
    let winner = this.state.winner;

    switch (youSelected) {
      case "paper":
        switch (computerSelected) {
          case "rock":
            winner = "you";
            break;
          case "scissors":
            winner = "comp";
            break;
          case "paper":
            winner = "draw";
            break;
          default:
            console.log("SOME UNLNOWN ERROR");
        }
        break;

      case "rock":
        switch (computerSelected) {
          case "scissors":
            winner = "you";
            break;
          case "paper":
            winner = "comp";
            break;
          case "rock":
            winner = "draw";
            break;
          default:
            console.log("SOME UNLNOWN ERROR");
        }
        break;

      case "scissors":
        switch (computerSelected) {
          case "paper":
            winner = "you";
            break;
          case "rock":
            winner = "comp";
            break;
          case "scissors":
            winner = "draw";
            break;
          default:
            console.log("SOME UNLNOWN ERROR");
        }
        break;

      default:
        console.log("SOME UNLNOWN ERROR");
    }

    await this.setState({
      winner: winner,
      computerSelected: computerSelected
    });
    this.props.loadResults(
      this.state.winner,
      this.state.youSelected,
      this.state.computerSelected
    );
  };

  render() {
    return (
      <div className="game-container">
        <Rock onSelect={this.onSelect} />
        <Paper onSelect={this.onSelect} />
        <Scissors onSelect={this.onSelect} />
      </div>
    );
  }
}

export default Game;
