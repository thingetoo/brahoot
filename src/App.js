import React from "react";

import "./App.css";

import Header from "./Components/Header";
import Game from "./Components/Game";
import Home from "./Pages/Home";

function App() {
  return (
      <div className="App">
        <Header />
        <Game />
      </div>
  );
}

export default App;
