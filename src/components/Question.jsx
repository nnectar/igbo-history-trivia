import React from 'react';

const Question = ({ question, options, onOptionSelected }) => {
  return (
    <div>
      <h3>{question}</h3>
      <div>
        {options.map((option, index) => (
          <button key={index} onClick={() => onOptionSelected(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
