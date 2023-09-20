import React, { useState } from "react";
import Main from "./components/Main";
import Content from "./components/Content";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";
import Question from "./components/Question";

function App() {
  const [question, setQuestion] = useState<boolean>(false);
  return (
    <div className="App">
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
