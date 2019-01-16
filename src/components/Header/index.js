import React from "react";
import './style.css'

function Header(props) {
  return (
    <div>
      <header className="jumbotron text-center">
        <h1>Clicky Game!</h1>
        <p>Click on an image to earn points, but don't click on any image more than once!</p>
      </header>
    </div>
  )
}

export default Header;