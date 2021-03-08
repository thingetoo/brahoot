import React, { useState } from "react";
import axios from 'axios'
import HighScores from "./HighScores";
import { NameForm } from "./NameForm";

import "./Game.css";
let questions;

axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
  .then(res => questions = res.data.results)

const Game = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [numberCorrect, setNumberCorrect] = useState(0);
  const [highScores, setHighScores] = useState([]);
  const [userName, setUserName] = useState("");
  const [isGameStart, setIsGameStart] = useState(false);

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
    setHighScores((highScores) => [...highScores, numberCorrect]);
    setShowScore(false);
    setQuestionNumber(0);
    setNumberCorrect(0);
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsGameStart(true);
    console.log(event.target);
  };

  return (
    <div className="game-container">
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
        ) : !isGameStart ? (
          <NameForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            userName={userName}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">Question #{questionNumber + 1}</span>
              <span id="question-text">
                {questions[questionNumber].question}
              </span>
            </div>
            <div className="answer-container">
              {questions[questionNumber].incorrect_answers.map((answer, idx) => (
                <button
                  key={`answer# ${idx}`}
                  onClick={() => handleAnswerButtonClick(answer.isCorrect)}
                  className="each-answer-button"
                >
                  {answer}
                </button>
              ))}
                <button className="each-answer-button"
                onClick={() => handleAnswerButtonClick(questions[questionNumber].correct_answer.isCorrect)}
                >
                  {questions[questionNumber].correct_answer}
                </button>
            </div>
          </>
        )}
      </div>
      <HighScores userName={userName} highScores={highScores} />
    </div>
  );
};

export default Game;
