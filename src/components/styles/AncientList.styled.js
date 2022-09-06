import styled from "styled-components";

const StyledAncientList = styled.div`
  & > h1 {
    text-align: center;
    font-size: 60px;
    font-weight: 400;
    text-shadow: 0 0 30px red;
    margin-bottom: 30px;
  }
  & > div {
    display: flex;
    justify-content: space-around;
  }
  & img {
    width: 20%;
    cursor: pointer;
    border-radius: 15px;
    transition: 0.3s;
    &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 25px red;
    }
  }
`;

export default StyledAncientList;
