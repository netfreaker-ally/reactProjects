import { useState } from "react";

export default function Player({
  initialname,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialname);
  const handleEditClick = () => {
    setIsEditing((editting) => !editting);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };
  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };
  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {isEditing ? (
            <input
              type="text"
              required
              value={playerName}
              onChange={handleChange}
            />
          ) : (
            <span className="player-name">{playerName}</span>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>
          {isEditing ? "Save " : "Edit"}
        </button>
      </li>
    </>
  );
}
