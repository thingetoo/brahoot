import React from "react";

import "./App.css";

import Header from "./Components/Header";
import Game from "./Components/Game";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about"></Route>

          <Route path="/play"></Route>
          <Route path="/sign-in"></Route>
          <Route path="/sign-up"></Route>
        </Switch>
        <Header />
        <Game />
      </div>
    </Router>
  );
}

export default App;
