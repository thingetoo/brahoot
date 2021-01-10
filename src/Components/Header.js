import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header-container">
      <span id="title">BRAHOOT!</span>
      <header className="menu-container">
        <a href="google" className="element home">
          Home
        </a>
        <a href="google" className="element about">
          About
        </a>
        <a href="google" className="element play">
          Play
        </a>
        <a href="google" className="element sign-up">
          Sign Up
        </a>
        <a href="google" className="element sign-in">
          Sign In
        </a>
      </header>
    </div>
  );
}

export default Header;
