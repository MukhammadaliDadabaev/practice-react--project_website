import React from "react";
// import images
import aboutImg from "../img/About-bg.jpg";
// Styled
import styled from "styled-components";
import { About, Description, Image } from "../styles";

const BenefitsSection = () => {
  return (
    <Benefits>
      <Description>
        <h2>
          High-Quality <br /> Learning System
        </h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced and talented mentors</h3>
          <h3>Fast learning system</h3>
          <h3>Offline school for children</h3>
        </div>
      </Description>
      <Image>
        <img src={aboutImg} alt="students imag" />
      </Image>
    </Benefits>
  );
};

// Styled
const Benefits = styled(About)`
  flex-direction: row-reverse;
  h2 {
    margin-left: 5rem;
    padding-bottom: 3rem;
    line-height: 55px;
    color: #30bee1;
  }
  h3 {
    width: 70%;
    margin: 0.5rem 0 0 5rem;
    padding: 0.5rem;
    font-size: 1.5rem;
    background-color: #fff;
    color: #000;
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
    border-bottom: 7px solid #30bee1;
  }
`;

export default BenefitsSection;
