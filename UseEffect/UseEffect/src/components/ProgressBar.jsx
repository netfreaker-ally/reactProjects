import { useEffect, useState } from "react";


const ProgressBar = ({TIMER}) => {
  const [remainingTime, setRemainingTime] = useState(TIMER);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((previous) => setRemainingTime(previous - 10));
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return ( 
    <progress value={remainingTime} max={TIMER} />

   );
}
 
export default ProgressBar;