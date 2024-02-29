import { useRef } from "react";
const Answers = ({ answers, selectedAnswer, answeredState, onSelect }) => {
  console.log("Quiz rendered")
  const shuffledAnswersRef = useRef();
  if (!shuffledAnswersRef.current) {
    shuffledAnswersRef.current = [...answers];
    shuffledAnswersRef.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswersRef.current.map((answer) => {
        // const isCorrectAnswer =
        //   answer === QUESTIONS[activeQuestionIndex].answers[0];
        const isSelected = selectedAnswer === answer;

        let cssClassName = "";

        if (answeredState === "Answered" && isSelected) {
          cssClassName = "selected";
        } else if (
          (answeredState === "correct" && isSelected) ||
          (answeredState === "wrong" && isSelected)
        ) {
          cssClassName = answeredState;
        }

        return (
          <li key={answer} className="answer">
            <button
              className={cssClassName}
              onClick={() => onSelect(answer)}
              disabled={answeredState != ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
