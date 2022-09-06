import { createGlobalStyle } from "styled-components";
import bg from "../../assets/home.jpg";

const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
}
html {
    height: 100%;
}
body {
    display: flex;
  justify-content: center;
    height: 100%;
    font-family: 'Rubik Wet Paint';
    background: url(${bg});
}
#root {
    margin: auto;
}
`;

export default GlobalStyles;
