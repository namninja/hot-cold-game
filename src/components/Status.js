import React from "react";
import "./Status.css";

function Status(props) {
  return (
    <div className="status">
      <h2>{props.status}</h2>
    </div>
  );
}

export default Status;
