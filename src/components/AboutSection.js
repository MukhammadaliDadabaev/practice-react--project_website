import React from "react";
// import images
import homeIntro from "../img/Biznes.jpg";
// impotr styled
import styel from "styled-components";


const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Be educated so that</h2>
          </Hide>
          <Hide>
            <h2> you <span>can change</span>  </h2>
          </Hide>
          <Hide>
            <h2>the world</h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
          rerum.
        </p>
        <button>About us</button>
      </Description>
      <Image>
        <img src={homeIntro} alt="developer groups"/>
      </Image>
    </About>
  );
};

// STYLED COMPONENTS
const About = styel.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 10rem;
`;
const Description = styel.div`
  flex: 1;
  padding-right: 5rem;
`;
const Image = styel.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const Hide = styel.div`
  overflow: hidden;
`;


export default AboutSection;
