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

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
  }

  body.dark-theme {
    color: #FFFFFF;
  }

  .wrapper {
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #F1F1F1;
  }

  body.dark-theme .wrapper {
    background-color: #151419;
  }

  .container {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
  }

  @media (max-width: 1200px) {
    .container {
      padding: 0 15px;
    }
  }

  /* Классы для совместимости с HTML */
  ._hover01:hover {
    background-color: #33399b !important;
  }

  ._hover02:hover, .header__user:hover {
    color: #33399b !important;
  }

  ._hover02:hover::after, .header__user:hover::after {
    border-left-color: #33399b !important;
    border-bottom-color: #33399b !important;
  }

  ._hover03:hover {
    background-color: #33399b !important;
    color: #FFFFFF !important;
  }

  ._hover03:hover a {
    color: #FFFFFF !important;
  }

  ._orange {
    background-color: #FFE4C2 !important;
    color: #FF6D00 !important;
  }

  ._green {
    background-color: #B4FDD1 !important;
    color: #06B16E !important;
  }

  ._purple {
    background-color: #E9D4FF !important;
    color: #9A48F1 !important;
  }

  ._gray {
    background: #94A6BE !important;
    color: #FFFFFF !important;
  }

  ._active-category {
    opacity: 1 !important;
  }

  ._hide {
    display: none !important;
  }

  .subttl {
    color: #000 !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    line-height: 1 !important;
  }

  body.dark-theme .subttl {
    color: #FFFFFF !important;
  }
`;
