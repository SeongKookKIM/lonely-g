import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Content from "./components/Content";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";
import Question from "./components/Question";
import Winning from "./components/Winning";

function App() {
  const [question, setQuestion] = useState<boolean>(false);
  const [winning, setWinning] = useState<boolean>(true);

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className="App">
      {/* {winning && <Winning setWinning={setWinning} />} */}
      <Winning />
      <Main />
      <Content />
      <RoadMap />
      <Footer />
      <div
        className="fixed-qa"
        onClick={() => {
          setQuestion(true);
        }}
      >
        <img src="/assets/quiz/fixed-q.png" alt="fixed-q" />
      </div>
      {question && <Question question={question} setQuestion={setQuestion} />}
    </div>
  );
}

export default App;
