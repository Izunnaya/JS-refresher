import React from "react";
import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const HandleEdit = () => {
    setIsEditing(!isEditing);
  };
  return (
    <div id="players">
      {isEditing ? (
        <input className="player" type="text" />
      ) : (
        <span id="player-name">{name}</span>
      )}
      <span id="player-symbol">{symbol}</span>
      <button onClick={HandleEdit}>edit</button>
    </div>
  );
};

export default Player;
