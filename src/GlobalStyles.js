import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
    font-family: inherit;
  }

  ul li {
    list-style: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.text};
  }

  div,
  button,
  a {
    font-family: "Roboto", sans-serif;
  }

  .wrapper {
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
  }

  .container {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
  }

  
  ._hover01:hover {
    background-color: #33399b !important;
  }

  .subttl {
    color: ${({ theme }) => theme.colors.text} !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    line-height: 1 !important;
  }

  @media (max-width: 1200px) {
    .container {
      padding: 0 15px;
    }
  }
`;
