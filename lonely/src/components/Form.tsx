import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiX } from "react-icons/fi";

interface FormProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

function Form({ setShowForm }: FormProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const [formQuestion, setFormQuestion] = useState<string>(
    "What was the first cryptocurrency created based on blockchain technology?"
  );

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleAnswerChange = (e: any) => {
    const { name, value, checked } = e.target;

    if (checked) {
      setSelectedAnswer(value);
    } else if (selectedAnswer === value) {
      setSelectedAnswer("");
    }
  };

  const hanlderEmail = (e: any) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_zbgwd0t",
          "template_po12o6n",
          formRef.current,
          "NRzBPAzFKAGVNQ48J"
        )
        .then(
          (result) => {
            console.log("Answer Suscess!");
            window.location.reload();
          },
          (error) => {
            console.log("Answer Fail!");
          }
        );
    }
  };

  return (
    <div className="form">
      <form
        ref={formRef}
        onSubmit={(e) => {
          hanlderEmail(e);
        }}
      >
        <h3>
          ANSWER{" "}
          <FiX
            onClick={() => {
              setShowForm(false);
            }}
          />
        </h3>
        <div className="name">
          <label>NAME</label>
          <input type="text" name="name"></input>
        </div>
        <div className="email">
          <label>E-MAIL</label>
          <input type="email" name="email"></input>
        </div>
        <div className="metamask-adress">
          <label>METAMASK ADRESS</label>
          <input type="text" name="adress"></input>
        </div>
        <div className="form-qa">
          <label>QUESTION</label>
          <input type="text" name="qa" defaultValue={formQuestion}></input>
        </div>
        <div className="form-answer">
          <label>ANSWER</label>
          <div className="answer-box">
            <div>
              <input
                type="checkbox"
                name="answer"
                value="Bitcoin"
                checked={selectedAnswer === "Bitcoin"}
                onChange={(e) => {
                  handleAnswerChange(e);
                }}
              />
              <span>Bitcoin</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="answer"
                value="Bitcoin Classic"
                checked={selectedAnswer === "Bitcoin Classic"}
                onChange={(e) => {
                  handleAnswerChange(e);
                }}
              />
              <span>Bitcoin Classic</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="answer"
                value="Ethereum"
                checked={selectedAnswer === "Ethereum"}
                onChange={(e) => {
                  handleAnswerChange(e);
                }}
              />
              <span>Ethereum</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="answer"
                value="Tether"
                checked={selectedAnswer === "Tether"}
                onChange={(e) => {
                  handleAnswerChange(e);
                }}
              />
              <span>Tether</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="answer"
                value="Cardano"
                checked={selectedAnswer === "Cardano"}
                onChange={(e) => {
                  handleAnswerChange(e);
                }}
              />
              <span>Cardano</span>
            </div>
          </div>
        </div>
        <div className="date">
          <input name="date" type="text" style={{ display: "none" }}></input>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Form;
