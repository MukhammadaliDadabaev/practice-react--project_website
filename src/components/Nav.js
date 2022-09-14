import React from "react";
import styled from "styled-components";
// LINK-PAGE
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  // ANIMATED LINKS
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          e-Learning
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="item" to="/">
            <b>About us</b>
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link className="item" to="/courses">
            <b>Courses</b>
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/courses" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link className="item" to="/contact">
            <b>Contact us</b>
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
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
    font-size: 2.5rem;
    font-weight: lighter;
    font-family: "Acme", sans-serif;
    letter-spacing: 3px;
  }
  a {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
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

const Line = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 0%;
  height: 0.3rem;
  position: absolute;
  bottom: -80%;
  left: 60%;
  background-color: #30bee1;
`;
export default Nav;
