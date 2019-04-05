import React from "react";
import "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-flex" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1>What do I do?</h1>
        <div className="instructions">
          <p>
            This is a Hot or Cold Number Guessing Game. The game goes like this:
          </p>
          <ol>
            <li>
              I pick a random secret number between 1 to 100 and keep it hidden.
            </li>
            <li>
              You need to guess until you can find the hidden secret number.
            </li>
            <li>
              You will get feedback on how close ("hot") or far ("cold") your
              guess is.
            </li>
          </ol>
          <p>So, Are you ready?</p>
        </div>
        <button className="close" onClick={handleClose}>
          Got It!
        </button>
      </section>
      <section class="modal-overlay" id="modal-overlay" />
    </div>
  );
};

export default Modal;
