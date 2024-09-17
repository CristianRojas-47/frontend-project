import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: system-ui, 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  body: {
    margin: 0;
    padding: 0;
  }
`;

export { GlobalStyles };
