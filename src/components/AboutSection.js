import React from "react";
// import images
import homeIntro from "../img/Biznes.jpg";

const AboutSection = () => {
  return (
    <div className="about">
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Be educated so that</h2>
          </div>
          <div className="hide">
            <h2> you can change</h2>
          </div>
          <div className="hide">
            <h2>the world</h2>
          </div>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
          rerum.
        </p>
        <button>About us</button>
      </div>
      <div className="image">
        <img src={homeIntro} alt="developer groups" width="350px" />
      </div>
    </div>
  );
};

export default AboutSection;
