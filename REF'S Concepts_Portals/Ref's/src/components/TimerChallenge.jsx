import { useRef, useState } from "react";
import ResultModel from "./ResultModel";

const TimerChallenge = ({ title, targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const isActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  const dialog = useRef();
  const timer = useRef();
  if (timeRemaining <= 0) {
    clearInterval(timer.current);

    dialog.current.open();
  }
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((previousTime) => previousTime - 10);
    }, 10);
  }
  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }
  return (
    <>
      <ResultModel
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        ref={dialog}
        onSubmit={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isActive ? handleStop : handleStart}>
            {isActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isActive ? "active" : undefined}>
          {isActive ? "Timer is Running" : "Timer is Inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
