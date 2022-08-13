import React from "react";
// import images
import aboutImg from "../img/About-bg.jpg";

const BenefitsSection = () => {
  return (
    <div className="benefits">
      <div className="descrition">
        <h2>High quality learning system</h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced and talented menors</h3>
          <h3>Fast learning system</h3>
          <h3>Offline school for children</h3>
        </div>
      </div>
      <img src={aboutImg} alt="students imag" width={350} />
    </div>
  );
};
export default BenefitsSection;
