import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #2a2e40;
  }
  button {
    padding: 1rem 2rem;
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    background-color: transparent;
    border: 3px solid #ffe45c;
    color: #fff;
    transition: all 0.3s linear;
    &:hover {
      background-color: #ffe45c;
      color: #2a2e35;
    }
  }
  h2 {
    font-weight: lighter;
    font-size: 3.5rem;
  }
  h3 {
    color: #fff;
  }
  h4 {
    font-weight: bold;
  }
  span {
    font-weight: bold;
    color: #ffe45c;
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