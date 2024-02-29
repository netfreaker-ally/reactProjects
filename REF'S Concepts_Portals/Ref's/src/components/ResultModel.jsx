import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ResultModel = forwardRef(function ResultModel(
  { result, targetTime, timeRemaining, onSubmit },
  ref
) {
  const dialog = useRef();
  const userLost = timeRemaining <= 0;
  // alert(timeRemaining);
  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return  createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedTimeRemaining}</strong>
      </p>
      <form method="dialog" onSubmit={onSubmit} onClose={onSubmit}>
        <button>Close</button>
      </form>
    </dialog>,document.getElementById("modal")
  )
});

export default ResultModel;
