import React from "react";
import data from "../data/difficulties";
import StyledDifficulty from "./styles/Difficulty.styled";

export default function Difficulty({ setGameDifficulty, setStage }) {
  const handleClick = (gameDifficulty) => {
    setGameDifficulty(gameDifficulty);
    setStage((stage) => stage + 1);
  };
  return (
    <StyledDifficulty>
      <h1>Pick difficulty!</h1>
      <ul>
        {data.map((gameDifficulty) => {
          return (
            <li
              key={gameDifficulty.id}
              onClick={() => handleClick(gameDifficulty)}
            >
              {gameDifficulty.name}
            </li>
          );
        })}
      </ul>
    </StyledDifficulty>
  );
}
