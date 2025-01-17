import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy"} targetTime={1} />
        <TimerChallenge title={"NotEasy"} targetTime={5} />
        <TimerChallenge title={"GettingStarted"} targetTime={10} />
        <TimerChallenge title={"Only for Pros"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
