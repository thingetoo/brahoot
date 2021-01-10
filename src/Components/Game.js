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
        {
          answerText: "the initialization, the Incrementation, and update",
          isCorrect: false,
        },
        {
          answerText: "the initialization, the test, and the update",
          isCorrect: true,
        },
        {
          answerText: "the initialization, the test, and Incrementation",
          isCorrect: false,
        },
        { answerText: "All of the above", isCorrect: false },
      ],
    },
    {
      questionText:
        "What is the correct syntax for referring to an external script called 'LFC.js'?",
      answerOptions: [
        { answerText: '<script src="LFC.js">', isCorrect: true },
        { answerText: '<script source="LFC.js">', isCorrect: false },
        { answerText: '<script ref="LFC.js">', isCorrect: false },
        { answerText: '<script type="LFC.js">', isCorrect: false },
      ],
    },
  ];

  const [questionNumber, setQuestionNumber] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [numberCorrect, setNumberCorrect] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setNumberCorrect(numberCorrect + 1);
    }
    const nextQuestion = questionNumber + 1;
    if (nextQuestion !== questions.length) {
      setQuestionNumber(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleGameRestart = () => {
    setShowScore(false);
    setQuestionNumber(0);
    setNumberCorrect(0);
  };

  return (
    <div className="container">
      <div className="game-card">
        {showScore ? (
          <div className="post-game">
            <div className="correct">
              You scored {numberCorrect} out of {questions.length}
            </div>
            <button className="restart" onClick={handleGameRestart}>
              Play Again
            </button>
          </div>
        ) : (
          <>
            <div className="question">
              <span id="question-number">Question #{questionNumber + 1}</span>
              <span id="question-text">
                {questions[questionNumber].questionText}
              </span>
            </div>
            <div className="answer-container">
              {questions[questionNumber].answerOptions.map((answer) => (
                <button
                  onClick={() => handleAnswerButtonClick(answer.isCorrect)}
                  className="each-answer-button"
                >
                  {answer.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Game;
