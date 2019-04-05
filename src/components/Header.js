import React, { Component } from "react";

const Header = props => {
  return (
    <div>
      <header className="App-header">
        <nav className="head">
          {/* eslint-disable-next-line */}
          <a onClick={props.showModal} className="new" href="#">
            WHAT?
          </a>
        </nav>
        <nav className="head">
          {/* eslint-disable-next-line */}
          <a onClick={props.restart} className="new" href="#">
            +NEW GAME
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
