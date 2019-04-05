import React from "react";
import "./Guesses.css";
function Guesses(props) {
  return (
    <div className="guesses">
      {props.guesses
        ? props.guesses.map(guess => (
            <span className="guess-item">{guess}</span>
          ))
        : "0"}
    </div>
  );
}

export default Guesses;
