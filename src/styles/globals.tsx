import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --page-gutter: 4rem;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans JP', sans-serif;
  }
  h1,h2,h3 {
    font-weight: 900;
  }
`;
