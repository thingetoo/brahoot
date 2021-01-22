import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

import "./Header.css";

function Header(props) {
  return (
    <Router>
      <div className="header-container">
        <a href="google.com">
          <span id="title">BRAHOOT!</span>
        </a>
        <nav className="menu-container">
          <Link to="/home" className="element home">
            Home
          </Link>
          <Link to="/about" className="element about">
            About
          </Link>
          <Link to="/play" className="element play">
            Play
          </Link>
          <Link to="/sign-up" className="element sign-up">
            Sign Up
          </Link>
          <Link to="/sign-in" className="element sign-in">
            Sign In
          </Link>
        </nav>
      </div>
    </Router>
  );
}

export default Header;
