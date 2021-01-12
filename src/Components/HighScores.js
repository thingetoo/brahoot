import React from "react";
import "./HighScores.css";

const HighScores = (props) => {
  return (
    <div>
      <div className="hswordcontainer">
        <span>Want to see where you rank?</span>
        <span>Here are the top scores</span>
        {props.highScores.map((score) => {
          return <p>{score}</p>;
        })}
      </div>
    </div>
  );
};

export default HighScores;
