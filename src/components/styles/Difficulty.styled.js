import styled from "styled-components";

const StyledDifficulty = styled.div`
  & > h1 {
    font-size: 70px;
    font-weight: 400;
    margin-bottom: 50px;
  }
  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    list-style: none;
    width: 500px;
    margin: 0 auto;
    & > li {
      border-radius: 10px;
      margin-bottom: 10px;
      background: gray;
      padding: 20px;
      font-size: 30px;
      text-align: center;
      cursor: pointer;
      &:hover {
        background: darkgray;
      }
    }
  }
`;

export default StyledDifficulty;
