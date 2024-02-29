import { useCallback, useState } from "react";
import QUESTIONS from "../questions";

import Question from "./Question";
import Summary from "./Summary";
const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  console.log("Quiz rendered")

  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((previous) => {
      return [...previous, selectedAnswer];
    });
  },
  []);
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (activeQuestionIndex >= QUESTIONS.length) {
    return (
     <Summary userAnswers ={userAnswers}/>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
