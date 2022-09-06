import React, { useState } from "react";
import Ancient from "./AncientList";
import Difficulty from "./Difficulty";
import Game from "./Game";
import GlobalStyles from "./styles/Global";

function App() {
  const [stage, setStage] = useState(0);
  const [ancientCard, setAncientCard] = useState(0);
  const [gameDifficulty, setGameDifficulty] = useState(0);

  return (
    <>
      <GlobalStyles />
      {stage === 0 && (
        <Ancient setAncientCard={setAncientCard} setStage={setStage} />
      )}
      {stage === 1 && (
        <Difficulty setGameDifficulty={setGameDifficulty} setStage={setStage} />
      )}
      {stage === 2 && (
        <Game
          ancientCard={ancientCard}
          gameDifficulty={gameDifficulty}
          setStage={setStage}
        />
      )}
    </>
  );
}

export default App;
