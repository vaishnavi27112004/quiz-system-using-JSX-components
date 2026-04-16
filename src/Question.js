import React from "react";

function Question({ data, selectedAnswer, onAnswerSelect }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{data.question}</h3>

      {data.options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name={`question-${data.id}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onAnswerSelect(data.id, option)}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Question;