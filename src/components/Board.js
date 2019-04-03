import React, { Component } from "react";
import Status from "./Status";
import GuessForm from "./GuessForm";
import Guesses from "./Guesses";
import "./Board.css";

class Board extends Component {
  render() {
    return (
      <section className="game-board">
        <Status />
        <GuessForm />
        <Guesses />
      </section>
    );
  }
}

export default Board;
