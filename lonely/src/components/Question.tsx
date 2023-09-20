import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import Form from "./Form";

interface QuestionProps {
  question: boolean;
  setQuestion: React.Dispatch<React.SetStateAction<boolean>>;
}

function Question({ question, setQuestion }: QuestionProps) {
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    document.querySelector("body")?.classList.add("fixed");

    return () => {
      document.querySelector("body")?.classList.remove("fixed");
    };
  }, []);

  function handlerFixed() {
    setQuestion(false);
  }
  return (
    <div className="question">
      <img src="/assets/quiz/quiz-bg.png" alt="question" />
      <div className="quiz-wrapper">
        <FiX
          className="quiz-close"
          onClick={() => {
            handlerFixed();
          }}
        />
        <strong>
          What was the first cryptocurrency created based on blockchain
          technology?
        </strong>
        <ul>
          <li>
            <span>1.</span>
            <p>Bitcoin</p>
          </li>
          <li>
            <span>2.</span>
            <p>Bitcoin Classic</p>
          </li>
          <li>
            <span>3.</span>
            <p>Ethereum</p>
          </li>
          <li>
            <span>4.</span>
            <p>Tether</p>
          </li>
          <li>
            <span>5.</span>
            <p>Cardano</p>
          </li>
        </ul>
        <button type="button">answer</button>
      </div>
      <Form />
    </div>
  );
}

export default Question;
