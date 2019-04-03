import React from "react";
import "./GuessForm.css";

function GuessForm(props) {
  return (
    <div className="guess-form-container">
      <form className="guess-form">
        <input
          id="guess-input"
          placeholder="Enter your Guess"
          type="text"
          name="userGuess"
          maxLength="3"
          autoComplete="off"
          required
        />
        <button type="submit" id="guess-btn" name="submit">
          Guess
        </button>
      </form>
      <h2>Guess#0!</h2>
    </div>
  );
}
export default GuessForm;
