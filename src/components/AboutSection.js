import React from "react";
// import images
import homeIntro from "../img/Biznes.jpg";
// impotr styled
import { About, Description, Hide, Image } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Be educated so that</h2>
          </Hide>
          <Hide>
            <h2>
              {" "}
              you <span>can change</span>{" "}
            </h2>
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
        <img src={homeIntro} alt="developer groups" />
      </Image>
    </About>
  );
};

// STYLED COMPONENTS

export default AboutSection;
