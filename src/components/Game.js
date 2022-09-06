import React, { useEffect, useState } from "react";
import Tracker from "./Tracker";
import prepareDeck from "./deckLogic";
import cardBackImg from "../assets/mythicCardBackground.jpg";
import { StyledGame } from "./styles/Game.styled";

export default function Game({ gameDifficulty, ancientCard, setStage }) {
  const [deck, setDeck] = useState([]);
  const [currentCard, setCurrentCard] = useState("");
  const [trackerCounter, setTrackerCounter] = useState({
    firstStage: ancientCard.firstStage,
    secondStage: ancientCard.secondStage,
    thirdStage: ancientCard.thirdStage,
  });
  useEffect(() => {
    setDeck(prepareDeck(gameDifficulty, ancientCard));
  }, [gameDifficulty, ancientCard]);

  const handleClick = () => {
    const currentCard = deck[deck.length - 1];
    setTrackerCounter((trackerCounter) => {
      const newVal = trackerCounter[currentCard.stage][currentCard.color];
      return {
        ...trackerCounter,
        [currentCard.stage]: {
          ...trackerCounter[currentCard.stage],
          [currentCard.color]: newVal - 1,
        },
      };
    });
    setCurrentCard(currentCard.cardFace);
    setDeck(deck.slice(0, deck.length - 1));
  };
  return (
    <StyledGame>
      <div>
        <Tracker trackerCounter={trackerCounter} />
        <div>
          {deck.length > 0 && (
            <img
              src={cardBackImg}
              alt="cardback"
              onClick={() => handleClick()}
            />
          )}
          {currentCard && <img src={currentCard} alt="cardback" />}
        </div>
      </div>
      <button onClick={() => setStage(0)}>Start Again</button>
    </StyledGame>
  );
}
