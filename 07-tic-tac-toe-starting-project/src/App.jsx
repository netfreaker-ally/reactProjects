import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import { GameOver } from "./components/GameOver";
const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function deriveWinner(GameBoardd, playerName) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      GameBoardd[combination[0].row][combination[0].column];
    const SecondSquareSymbol =
      GameBoardd[combination[1].row][combination[1].column];
    const ThirdSquareSymbol =
      GameBoardd[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === SecondSquareSymbol &&
      firstSquareSymbol === ThirdSquareSymbol
    ) {
      winner = playerName[firstSquareSymbol];
     
    }
  }
  return winner;
}
function deriveGameBoard(gameTurns) {
  let GameBoardd = [...initialGameBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    GameBoardd[row][col] = player;
  }
  return GameBoardd;
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerName, setPlayerName] = useState(PLAYERS);
  const activePlayer = derivedActivePlayer(gameTurns);
  const GameBoardd = deriveGameBoard(gameTurns);

  const winner = deriveWinner(GameBoardd, playerName);
  const hasdraw = gameTurns.length === 9 && !winner;
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((previousTurn) => {
      const currentPlayer = derivedActivePlayer(previousTurn);
      let updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...previousTurn,
      ];
      return updatedTurns;
    });
  }
  function handleRestart() {
    setGameTurns([]);
  }
  function handlePlayerNameChange(symbol, playerName) {
    setPlayerName((previous) => {
      return {
        ...previous,
        [symbol]: playerName,
      };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialname={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialname={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasdraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={GameBoardd} />
        <Log turns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
