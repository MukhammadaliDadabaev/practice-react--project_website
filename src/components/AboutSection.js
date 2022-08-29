import React from "react";
// import images
import homeIntro from "../img/Biznes.jpg";
// impotr styled
import { About, Description, Hide, Image } from "../styles";
// framer motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>Be educated so that</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              you <span>can change</span>{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>the world</motion.h2>
          </Hide>
        </motion.div>
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
