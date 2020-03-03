import React, { Component } from "react";
import Logo from "../Logo/Logo";
import Game from "../Game/Game";
import RuleModal from "../RuleModal/RuleModal";
import Result from "../Result/Result";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false,
      yourSelection: "",
      computerSelection: "",
      winner: "",
      score: 0,
      showModal: false
    };
  }

  loadResults = (winner, yourSelection, computerSelection) => {
    if (winner == "you") {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      showResults: true,
      yourSelection: yourSelection,
      computerSelection: computerSelection,
      winner: winner
    });
  };

  restartGame = () => {
    this.setState({
      showResults: false,
      yourSelection: "",
      computerSelection: ""
    });
  };

  modalToggle = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    const MainContainer = this.state.showResults ? (
      <Result
        yourSelection={this.state.yourSelection}
        computerSelection={this.state.computerSelection}
        winner={this.state.winner}
        restartGame={this.restartGame}
      />
    ) : (
      <Game loadResults={this.loadResults} />
    );
    return (
      <React.Fragment>
        <Logo score={this.state.score} />
        {MainContainer}
        <RuleModal
          showModal={this.state.showModal}
          modalToggle={this.modalToggle}
        />
      </React.Fragment>
    );
  }
}

export default Layout;
