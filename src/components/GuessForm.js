import React from "react";
import "./GuessForm.css";

class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userGuess: null
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.userGuess);
    this.setState({ userGuess: "" });
  }

  render() {
    return (
      <div className="guess-form-container">
        <form className="guess-form" onSubmit={e => this.onSubmit(e)}>
          <input
            id="guess-input"
            placeholder="Enter your Guess"
            type="number"
            maxLength="3"
            size="3"
            min="1"
            max="100"
            name="userGuess"
            autoComplete="off"
            required
            onChange={e => this.setState({ userGuess: e.target.value })}
            value={this.state.userGuess}
          />
          <button type="submit" id="guess-btn" name="submit">
            Guess
          </button>
        </form>
        <h2>
          Guess # <span className="counter">{this.props.counter}</span> !
        </h2>
      </div>
    );
  }
}
export default GuessForm;
