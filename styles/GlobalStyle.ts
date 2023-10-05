import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    user-select: none;
    text-align: center;
    text-decoration: none;
  }

  body {
    background-color: #1b1f23ea;
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
  }
`;