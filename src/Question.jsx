
import React, { useState } from 'react';

const Question = ({ question, options, correctAnswer, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onAnswer(option === correctAnswer);
  };

  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
      {selectedOption && (
        <div>
          You selected: {selectedOption}
        </div>
      )}
    </div>
  );
};

export default Question;
