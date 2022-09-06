import React from "react";
import data from "../data/ancients";
import StyledAncientList from "./styles/AncientList.styled";

export default function AncientList({ setAncientCard, setStage }) {
  const handleClick = (ancient) => {
    setAncientCard(ancient);
    setStage((stage) => stage + 1);
  };
  return (
    <StyledAncientList>
      <h1>Pick an Ancient I dare you!</h1>
      <div>
        {data.map((ancient, index) => {
          return (
            <img
              key={ancient.id}
              src={ancient.cardFace}
              alt={ancient.name}
              onClick={() => handleClick(ancient)}
            />
          );
        })}
      </div>
    </StyledAncientList>
  );
}
