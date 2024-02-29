import { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  console.log("QuestionTimer rendered")
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearInterval(timer);
    };
  }, [timeout, onTimeout]);
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((previous) => previous - 1000);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeout}
      className={mode != null ? mode : undefined}
    />
  );
};

export default QuestionTimer;
