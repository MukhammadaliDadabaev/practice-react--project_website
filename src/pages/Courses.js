import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <StyledCourses>
      <Course>
        <h2>Interaktiv PHP Language</h2>
        <div className="line"></div>
        <Link>
          <img
            src="https://geekway-mag.fr/wp-content/uploads/2021/03/3-2.jpg"
            alt="PHP-image"
          />
        </Link>
      </Course>
      <Course>
        <h2>Interaktiv PHP Language</h2>
        <div className="line"></div>
        <Link>
          <img
            src="https://assets.htmlacademy.ru/og/intensive/v4/react-og.png"
            alt="PHP-image"
          />
        </Link>
      </Course>
      <Course>
        <h2>Interaktiv JavaScript Language</h2>
        <div className="line"></div>
        <Link>
          <img
            src="https://zacznijprogramowac.net/content/images/2022/02/Photo---Text--67-.png"
            alt="Js-image"
          />
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
