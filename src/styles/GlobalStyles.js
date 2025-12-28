import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    font-size: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
   font-family: 'Nunito', sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    overflow-x: hidden;
  }

 
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.border};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.emerald};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    letter-spacing: -0.02em; 
    color: ${(props) => props.theme.colors.text};
  }
  button, input, select, textarea {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
    .amount-display {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }
`;
