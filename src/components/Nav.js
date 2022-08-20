import React from "react";
import styled from "styled-components";
// LINK-PAGE
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          e-Learning
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About us</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

// STYLED
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  padding: 1.3rem 7rem;
  justify-content: space-between;
  align-items: center;
  background-color: #383e57;
  #logo {
    font-size: 2rem;
    font-weight: lighter;
    font-family: "Acme", sans-serif;
    letter-spacing: 3px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  ul {
    display: flex;
    list-style-type: none;
  }
  li {
    position: relative;
    padding-left: 10rem;
  }
`;

export default Nav;
