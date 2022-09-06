import styled from "styled-components";

export const StyledGame = styled.div`
  &>div {
    display: flex;
    align-items: center;
    /* justify-content: s; */
    gap: 50px
  }
  img {
    height: 400px;
    border-radius: 15px;
  }
  img:first-child {
    margin-right: 20px;
    cursor: pointer;
    transition: 0.3s;
    &:active {
      transform: scale(1.02);
    }
  }
  display: flex;
  flex-direction: column;
  width: 900px;
  margin: 0 auto;
  & > button {
    padding: 20px;
    background-color: gray;
    border-radius: 10px;
    font-family: inherit;
    font-size: 30px;
    border: none;
    margin-top: 50px;
    width: 500px;
    align-self: center;
    &:hover {
      background-color: lightgrey;
    }
  }
`;
