import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// IMAGES
import react from "../img/react.png";
import soon from "../img/soon.png";
import js from "../img/js.png";

const Courses = () => {
  return (
    <StyledCourses>
      <Course>
        <h2>Interaktiv React Language</h2>
        <div className="line"></div>
        <Link to={"/courses/react"}>
          <img src={react} alt="React.png" />
        </Link>
      </Course>
      <Course>
        <h2>Interaktiv PHP Language</h2>
        <div className="line"></div>
        <Link to={"/courses/soon"}>
          <img src={soon} alt="React.png" />
        </Link>
      </Course>
      <Course>
        <h2>Interaktiv JavaScript Language</h2>
        <div className="line"></div>
        <Link to={"/courses/javascript"}>
          <img src={js} alt="React.png" />
        </Link>
      </Course>
    </StyledCourses>
  );
};

const StyledCourses = styled.div`
  min-height: 100vh;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
    color: #fff;
  }
`;

const Course = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
  }
`;

export default Courses;
