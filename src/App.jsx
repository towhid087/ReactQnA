
import React, { useState } from 'react';
import Question from './Question';

const App = () => {
  const [score, setScore] = useState(0);
  const questionData = {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      <Question 
        question={questionData.question} 
        options={questionData.options} 
        correctAnswer={questionData.correctAnswer} 
        onAnswer={handleAnswer} 
      />
      <div>Score: {score}</div>
    </div>
  );
};

export default App;
