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
  }

  ul li {
    list-style: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.black};
  }

  .wrapper {
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  .container {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
  }

  ._orange {
    background-color: ${({ theme }) => theme.colors.orangeBg};
    color: ${({ theme }) => theme.colors.orange};
  }

  ._green {
    background-color: ${({ theme }) => theme.colors.greenBg};
    color: ${({ theme }) => theme.colors.green};
  }

  ._purple {
    background-color: ${({ theme }) => theme.colors.purpleBg};
    color: ${({ theme }) => theme.colors.purple};
  }

  ._gray {
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.white};
  }

  ._active-category {
    opacity: 1 !important;
  }

  ._hide {
    display: none;
  }

  ._dark {
    display: none;
  }

  ._btn-bor {
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: 0.7px solid ${({ theme }) => theme.colors.primary};
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  ._btn-bg {
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    color: ${({ theme }) => theme.colors.white};
    
    a {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  ._hover01:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  ._hover02:hover,
  .header__user:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }

  ._hover02:hover::after,
  .header__user:hover::after {
    border-left-color: ${({ theme }) => theme.colors.primaryHover};
    border-bottom-color: ${({ theme }) => theme.colors.primaryHover};
  }

  ._hover03:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.white};
  }

  ._hover03:hover a {
    color: ${({ theme }) => theme.colors.white};
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

  body.dark-theme {
    background-color: ${({ theme }) => theme.colors.darkBg};
    color: ${({ theme }) => theme.colors.white};
    
    .wrapper {
      background-color: ${({ theme }) => theme.colors.darkBg};
    }
  }
`;
