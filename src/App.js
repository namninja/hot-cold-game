import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="head">WHAT?</nav>
          <nav className="head">
            <a className="new" href="#">
              +NEW GAME
            </a>
          </nav>
        </header>
        <section className="game">
          <h1 className="title">HOT or COLD</h1>
          <Board />
        </section>
      </div>
    );
  }
}

export default App;
