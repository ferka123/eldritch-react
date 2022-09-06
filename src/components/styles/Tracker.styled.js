import styled from "styled-components";

export const StyledTracker = styled.div`
  width: 250px;
  h2 {
    margin-bottom: 10px;
    font-weight: 400;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
`;

const colors = {
  green: "rgba(124,252,0,0.2)",
  blue: "rgba(30,144,255,0.3)",
  brown: "rgba(139,69,19,0.4)",
};
export const Circle = styled.div`
  background: ${(props) => colors[props.color]};
  width: 70px;
  height: 50px;
  border-radius: 15px;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
`;
