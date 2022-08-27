import React from "react";
// import images
import homeIntro from "../img/Biznes.jpg";
// impotr styled
import { About, Description, Hide, Image } from "../styles";
// framer motion
import { motion } from "framer-motion";

const AboutSection = () => {
  // ANIMATED
  const titleAnim = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1.8 },
    },
  };

  const container = {
    hidden: { x: 100, opacity: 0.7 },
    show: {
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        staggerChildren: 1,
        when: "beforeChildren",
      },
    },
  };
  return (
    <About>
      <Description>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnim} initial="hidden" animate="show">
              Be educated so that
            </motion.h2>
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
