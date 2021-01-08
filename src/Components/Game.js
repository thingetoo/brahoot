import React, { useState } from "react";
import "./Game.css";

const Game = () => {
  const questions = [
    {
      questionText: "Which of the following is not JavaScript Data Types?",
      answerOptions: [
        { answerText: "Undefined", isCorrect: false },
        { answerText: "Number", isCorrect: false },
        { answerText: "Boolean", isCorrect: false },
        { answerText: "Float", isCorrect: true },
      ],
    },
    {
      questionText: "Which company developed JavaScript?",
      answerOptions: [
        { answerText: "Netscape", isCorrect: true },
        { answerText: "Bell Labs", isCorrect: false },
        { answerText: "IBM", isCorrect: false },
        { answerText: "ECMA", isCorrect: false },
      ],
    },
    {
      questionText: "Inside which HTML element do we put the JavaScript?",
      answerOptions: [
        { answerText: "<script>", isCorrect: true },
        { answerText: "<head>", isCorrect: false },
        { answerText: "<meta>", isCorrect: false },
        { answerText: "<style>", isCorrect: false },
      ],
    },
    {
      questionText:
        "What are the three important manipulations done in a for loop on a loop variable in javascript?",
      answerOptions: [
        { answerText: "the initialization, the Incrementation, and update" },
        { answerText: "the initialization, the test, and the update" },
        { answerText: "the initialization, the test, and Incrementation" },
        { answerText: "All of the above" },
      ],
    },
    {
      questionText:
        "What is the correct syntax for referring to an external script called 'LFC.js'?",
      answerOptions: [
        { answerText: '<script src="LFC.js">' },
        { answerText: '<script source="LFC.js">' },
        { answerText: '<script ref="LFC.js">' },
        { answerText: '<script type="LFC.js">' },
      ],
    },
  ];

  const [questionNumber, setQuestionNumber] = useState(0);

  return (
    <div className="container">
      <div className="game-card">
        <div className="question">
          <span id="question-number">Question #{questionNumber + 1}</span>
          <span id="question-text">
            {questions[questionNumber].questionText}
          </span>
        </div>
        <div className="answer-container">
          {questions[questionNumber].answerOptions.map((answer) => (
            <button className="each-answer-button">{answer.answerText}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
