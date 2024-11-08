import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'CustomFont';
    src: url('/assets/fonts/neodgm_code.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: 'CustomFont', sans-serif;
  }
`;

export default GlobalStyles;
