import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  // STATE
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout className="question h4">
        {title}
      </motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
