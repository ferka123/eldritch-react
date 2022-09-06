import React from "react";
import { StyledTracker, Circle } from "./styles/Tracker.styled";

export default function Tracker({ trackerCounter }) {
  return (
    <StyledTracker>
      {Object.keys(trackerCounter).map((stage, index) => {
        return (
            <div key={stage}>
              {Object.keys(trackerCounter[stage]).map((color) => {
                return (
                  <Circle color={color} key={color}>
                    {trackerCounter[stage][color]}
                  </Circle>
                );
              })}
            </div>
        );
      })}
    </StyledTracker>
  );
}
