import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    background: #312e38;
    font-family: 'Arial';
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
  }
  
  button {
    cursor: pointer;
    border: 0;
  }
`;

export default GlobalStyle;
