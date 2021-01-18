import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Game from "./Game";
import Home from "../Pages/Home";

import "./Header.css";

function Header(props) {
  return (
    <Router>
      <div className="header-container">
        <span id="title">BRAHOOT!</span>
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
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about"></Route>

          <Route path="/play"></Route>
          <Route path="/sign-in"></Route>
          <Route path="/sign-up"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Header;
