import React from "react";
// styeled
import { About } from "../styles";
import { AnimateSharedLayout } from "framer-motion";
// component
import styled from "styled-components";
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Могу ли я научиться программированию с вами?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis dolor explicabo facere magni quo recusandae.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Как оплачивается стоимость курсов?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis dolor explicabo facere magni quo recusandae.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="После покупки этого курса, смогу ли я учиться вместе с братом?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis dolor explicabo facere magni quo recusandae.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Могу ли я научиться программированию с вами?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis dolor explicabo facere magni quo recusandae.
              </p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
