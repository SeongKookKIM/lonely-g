import React from "react";
import Marquee from "react-fast-marquee";

function RoadMap() {
  return (
    <div className="roadmap">
      <Marquee className="raodmap-marquee">
        <img src="/assets/road-map.png" alt="roadmap" />
        <img src="/assets/road-map.png" alt="roadmap" />
        <img src="/assets/road-map.png" alt="roadmap" />
      </Marquee>
      <div className="roadmap-content">
        <div className="qa">
          <strong>QUIZ?</strong>
          <p>
            IF YOU ARE A HOLDER
            <br />
            WE WILL SEND YOU A MONTHLY
            <br />
            QUIZ AND IF YOU ANSWER
            <br />
            IT CORRECTLY YOU WILL WIN
            <br />
            SOME REALLY FUN PRIZES.
          </p>
        </div>
        <div className="prize">
          <strong>PRIZE?</strong>
          <p>
            EACH MONTH, WE WILL
            <br />
            DRAW THE CORRECTION
            <br />
            ANSWER TO THE QUIZ
            <br />
            AND ETHEREUM AS A PRIZE
            <br />
            THE WINNER'S E-MAIL
            <br />
            WILL BE ANNOUNCED
            <br />
            ON THE <span>1</span>ST OF EVERY MONTH
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
