import React, { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [timeout, setTimeout] = React.useState(0);
  const [timer, setTimer] = React.useState(0);
  // const myRef = useCustomRef(10);
  const myTimerFunc = () => {
    setTimer((timer) => timer + 1);
  };
  const handleCounter = (flag, isRestart) => {
    if (flag) {
      if (!timeout) {
        let myTimeout = setInterval(myTimerFunc, 100);
        setTimeout(myTimeout);
      }
    } else {
      if (isRestart) {
        setTimer(0);
      }
      clearInterval(timeout);
      setTimeout(0);
    }
  };
  return (
    <div className="App">
      <h3>My Timer App</h3>
      <h1>{timer}</h1>
      <div>
        <button
          className="btn btn-primary m-1"
          onClick={() => handleCounter(true)}
        >
          Play
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => handleCounter(false)}
        >
          Pause
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => handleCounter(false, true)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
