import React, { useState } from "react";
import { questions } from "../data/Questions";
import "./HighScores.css";

const HighScores = (props) => {
  return (
    <div className="hswordcontainer">
      {/*<span>Want to see where you rank?</span>*/}
      <span>Here are the top scores:</span>
      <span>{props.userName ? `Current user: ${props.userName}` : null}</span>
      <div className="high-score-values">
        {props.highScores.map((score, idx) => {
          return (
            <div key={`highscore${idx}`} className="single-high-score">
              <p>Attempt# {idx + 1}</p>
              <p>
                {score}/{questions.length}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HighScores;
