import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #2a2e40;
    font-family: 'SF Pro Display', sans-serif;
  }
  button {
    padding: 1rem 2rem;
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    background-color: transparent;
    border: 3px solid #30bee1;
    color: #fff;
    transition: all 0.3s linear;
    &:hover {
      background-color: #30bee1;
      color: #2a2e35;
    }
  }
  h2 {
    font-weight: lighter;
    font-size: 2.5rem;
  }
  h3 {
    color: #fff;
  }
  h4 {
    font-size: 2rem;
    font-weight: bold;
    color: #30bee1;
  }
  span {
    font-weight: bold;
    color: #30bee1;
  }
  a {
    font-size: 1.1rem;
  }
  p {
    padding: 3rem 0rem;
    font-size: 1.3rem;
    line-height: 150%;
    color: #ccc;
  }
  
`;

export default GlobalStyle;
