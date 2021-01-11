import "./App.css";
import Header from "./Components/Header";
import Game from "./Components/Game";
import HighScores from "./Components/HighScores";

function App() {
  return (
    <div className="App">
      <Header />
      <Game />
      <HighScores />
    </div>
  );
}

export default App;
