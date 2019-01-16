import React from "react";
import './style.css';

function Navbar(props) {
  return (
    <div>
      <div className="row nav navbar nav-pills text-center">
        <div className="col-sm">Clicky Game</div>
        <div className="col-sm">{props.message}</div>
        <div className="col-sm">Score: {props.curScore} | Top Score: {props.topScore}</div>
      </div>
    </div>
  )
}

export default Navbar;