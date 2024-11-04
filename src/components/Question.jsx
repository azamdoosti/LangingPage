import React from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="container question">
      <div className="question-title">
        <h2>{title}</h2>
        <button onClick={handleClick}>
          <AiOutlinePlus color="#1f93ff" />
        </button>
      </div>
      <div className="question-answer">{showAnswer && <p>{answer}</p>}</div>
    </div>
  );
};

export default Question;
