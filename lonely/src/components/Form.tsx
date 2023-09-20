import React from "react";
import { FiX } from "react-icons/fi";

function Form() {
  return (
    <div className="form">
      <form>
        <h3>
          ANSWER <FiX />
        </h3>
        <div className="name">
          <label>NAME</label>
          <input type="text" name="name"></input>
        </div>
        <div className="metamask-adress">
          <label>METAMASK ADRESS</label>
          <input type="text" name="adress"></input>
        </div>
        <div className="form-qa">
          <label>QUESTION</label>
          <input
            type="text"
            name="q&a"
            placeholder="What was the first cryptocurrency created based on blockchain
          technology?"
            value="What was the first cryptocurrency created based on blockchain
          technology?"
            disabled
          ></input>
        </div>
        <div className="form-answer">
          <label>ANSWER</label>
          <div className="answer-box">
            <div>
              <input type="checkbox" name="answer" value="Bitcoin" />
              <span>Bitcoin</span>
            </div>
            <div>
              <input type="checkbox" name="answer" value="Bitcoin Classic" />
              <span>Bitcoin Classic</span>
            </div>
            <div>
              <input type="checkbox" name="answer" value="Ethereum" />
              <span>Ethereum</span>
            </div>
            <div>
              <input type="checkbox" name="answer" value="Tether" />
              <span>Tether</span>
            </div>
            <div>
              <input type="checkbox" name="answer" value="Cardano" />
              <span>Cardano</span>
            </div>
          </div>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Form;
