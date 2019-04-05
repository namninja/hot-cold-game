import React, { Component } from "react";
import "./App.css";
import Status from "./components/Status";
import GuessForm from "./components/GuessForm";
import Guesses from "./components/Guesses";
import Modal from "./components/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      currentGuess: "",
      status: "Make your guess!",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
    this.restartGame = this.restartGame.bind(this);
  }
  restartGame() {
    this.setState({
      show: false,
      guesses: [],
      currentGuess: "",
      status: "Make your guess!",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  saveGuess(guess) {
    const difference = Math.abs(guess - this.state.correctAnswer);
    let status;
    if (difference >= 50) {
      status = "You're Ice Cold...";
    } else if (difference >= 30) {
      status = "You're Cold...";
    } else if (difference >= 10) {
      status = "You're Warm.";
    } else if (difference >= 1) {
      status = "You're Hot!";
    } else {
      status = "You got it!";
    }
    this.setState({
      status,
      currentGuess: guess,
      guesses: [...this.state.guesses, guess]
    });
  }
  render() {
    return (
      <div className="App">
        <Modal show={this.state.show} handleClose={this.hideModal} />
        <header className="App-header">
          <nav className="head">
            <a onClick={this.showModal} className="new" href="#">
              WHAT?
            </a>
          </nav>
          <nav className="head">
            <a onClick={this.restartGame} className="new" href="#">
              +NEW GAME
            </a>
          </nav>
        </header>
        <section className="game">
          <h1 className="title">HOT or COLD</h1>
          <section className="game-board">
            <Status status={this.state.status} />
            <GuessForm
              onSubmit={value => this.saveGuess(value)}
              counter={this.state.guesses.length}
            />
            <Guesses guesses={this.state.guesses} />
          </section>
        </section>
      </div>
    );
  }
}

export default App;
