import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  ol, ul {
    list-style: none;
  }
  select:focus {
    outline: none;
  }
`;

export default GlobalStyle;
