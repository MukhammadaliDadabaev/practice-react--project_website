import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CourseState } from "../courseState";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const CourseDetail = () => {
  const histor = useHistory();
  const url = histor.location.pathname;

  // STATE
  const [courses] = useState(CourseState);
  const [course, setCourse] = useState(null);

  // useEffect -> setCourses
  useEffect(() => {
    const currentCourse = courses.filter(
      (stateCourse) => stateCourse.url === url
    );
    setCourse(currentCourse[0]);
  }, [courses, url]);

  return (
    <>
      {course && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <Header>
            <h2>{course.title}</h2>
            <img src={course.mainImg} alt="Laptop" />
          </Header>
          <Awards>
            {course.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={course.secondaryImg} alt="Developer" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

// STYLES
const Details = styled(motion.div)`
  color: #fff;
`;
const Header = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 3rem 1rem;
`;

const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 1.3rem;
  }
  .line {
    width: 100%;
    height: 0.1px;
    background: #30bee1;
    margin: 0.7rem 0 0;
  }
  p {
    padding: 2rem 0;
    font-size: 0.9rem;
  }
`;

const ImageDisplay = styled.div`
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

// Award component
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};

export default CourseDetail;
