import React, { useState } from 'react';
import questions from '../data/questions';
import Question from './Question';

const Game = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showCorrectMessage, setShowCorrectMessage] = useState(false);

  const handleOptionSelected = (option) => {
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
      setShowCorrectAnswer(false);
      setShowCorrectMessage(true);
    } else {
      setShowCorrectAnswer(true);
      setShowCorrectMessage(false);
      return;
    }

    setTimeout(() => {
      setShowCorrectMessage(false);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert(`Game over! Your score is: ${score + 1}`);
        setCurrentQuestionIndex(0);
        setScore(0);
      }
    }, 1000);
  };

  return (
    <div>
      <Question
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        onOptionSelected={handleOptionSelected}
      />
      {showCorrectAnswer && (
        <p className="correct-answer">
          The correct answer is: {questions[currentQuestionIndex].answer}
        </p>
      )}
      {showCorrectMessage && <p className="correct-message">Correct!</p>}
      <p>Score: {score}</p>
    </div>
  );
};

export default Game;
