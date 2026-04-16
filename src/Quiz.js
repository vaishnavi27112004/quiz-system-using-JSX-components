import React, { useState } from "react";
import quizData from "./data";
import Question from "./Question";

function Quiz() {
  const [answers, setAnswers] = useState({});

  // Handle answer selection (STATE LIFTING)
  const handleAnswerSelect = (questionId, option) => {
    setAnswers({
      ...answers,
      [questionId]: option
    });
  };

  // Calculate score in real-time
  const calculateScore = () => {
    let score = 0;

    quizData.forEach((q) => {
      if (answers[q.id] === q.answer) {
        score++;
      }
    });

    return score;
  };

  return (
    <div>
      <h1>Quiz App</h1>

      {quizData.map((q) => (
        <Question
          key={q.id}
          data={q}
          selectedAnswer={answers[q.id]}
          onAnswerSelect={handleAnswerSelect}
        />
      ))}

      <h2>
        Score: {calculateScore()} / {quizData.length}
      </h2>
    </div>
  );
}

export default Quiz;