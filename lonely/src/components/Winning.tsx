import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

function Winning() {
  const [action, setAction] = useState<string>("");

  useEffect(() => {
    setAction("");

    return () => {
      setAction("action");
    };
  }, []);

  return (
    <div className={`winning ${action}`}>
      <img src="/assets/quiz/winning.png" alt="winning" />
      <FiX
        className="winning-close"
        onClick={() => {
          setAction("action");
        }}
      />
      <div className="winning-content">
        <h6>
          LONELY-G Quiz <span>1</span>st Winner
        </h6>
        <strong>congratulations!</strong>
        <span className="winner">test123@gmail.com</span>
      </div>
    </div>
  );
}

export default Winning;
