import React from "react";
// styeled
import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>Могу ли я научиться программированию с вами?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            dolor explicabo facere magni quo recusandae.
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question">
        <h4>Как оплачивается стоимость курсов?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            dolor explicabo facere magni quo recusandae.
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question">
        <h4>После покупки этого курса, смогу ли я учиться вместе с братом?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            dolor explicabo facere magni quo recusandae.
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question">
        <h4>Могу ли я научиться программированию с вами?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            dolor explicabo facere magni quo recusandae.
          </p>
        </div>
      </div>
    </Faq>
  );
};

// Styled
const Faq = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
  .faq-line {
    width: 100%;
    height: 0.3rem;
    margin: 2rem 0;
    background-color: #ccc;
  }
`;

export default FaqSection;
