import React, { useState } from "react";
import {
  InstructionsWrapper,
  FeatureList,
  InstructLink,
} from "./style-instructions";
export default function Instructions() {
  const [featureImg, setFeatureImg] = useState("images/examples/type.jpg");

  return (
    <InstructionsWrapper>
      <header>
        <h1 id="title">Instructions</h1>
        <InstructLink to="/">Back to home</InstructLink>
      </header>
      <section id="feature-wrapper">
        <div id="card-features">
          <h2>Each card has 4 features</h2>
          <FeatureList>
            <li
              onClick={() => {
                setFeatureImg("images/examples/type.jpg");
              }}
            >
              Type <span>laugh, cool, hug</span>
            </li>
            <li
              onClick={() => {
                setFeatureImg("images/examples/color.jpg");
              }}
            >
              Color <span>yellow, blue, red</span>
            </li>
            <li
              onClick={() => {
                setFeatureImg("images/examples/number.jpg");
              }}
            >
              Number <span>1, 2, 3</span>
            </li>
            <li
              onClick={() => {
                setFeatureImg("images/examples/shadow.jpg");
              }}
            >
              Shadow <span>left, right, none</span>
            </li>
          </FeatureList>
        </div>
        {/* <div id="card-example"> */}
        <img src={featureImg} titre="Example card" alt="example card" />
        {/* </div> */}
      </section>
      <section className="instructions" id="instruction1-wrapper">
        <p>
          A 'Set' consists of <span>three cards</span> in which{" "}
          <span>each feature</span> is
          <br /> EITHER
          <br /> <span>the same on each card</span>
          <br />
          OR
          <br /> <span>is different on each card.</span>
        </p>
      </section>
      <section id="good-example-wrapper">
        <div id="good-example">
          <img
            className="set-example"
            src="images/cool-yellow-2-none.jpg"
            alt="cool-yellow-2-none"
          />
          <img
            className="set-example"
            src="images/cool-red-2-left.jpg"
            alt="cool-red-2-left"
          />
          <img
            className="set-example"
            src="images/cool-blue-2-right.jpg"
            alt="cool-blue-2-right"
          />
        </div>
        <div>
          <h3>This is a set !</h3>
          <p>All same type</p>
          <p>All different colors</p>
          <p>All same number</p>
          <p>All different shadows</p>
        </div>
      </section>
      <section className="instructions" id="instruction2-wrapper">
        <p>
          That is to say,
          <br />
          <span>any feature</span> in the 'Set' of three cards is
          <br />
          EITHER
          <br />
          <span>common to all three cards</span>
          <br />
          OR
          <br />
          <span>is different on each card.</span>
        </p>
      </section>
      <section id="bad-example-wrapper">
        <div id="bad-example">
          <img
            className="set-example"
            src="images/laugh-blue-2-none.jpg"
            alt="laugh-yellow-2-none"
          />
          <img
            className="set-example"
            src="images/laugh-red-1-none.jpg"
            alt="laugh-red-1-none.jpg"
          />
          <img
            className="set-example"
            src="images/laugh-red-3-none.jpg"
            alt="laugh-red-3-none"
          />
        </div>
        <div>
          <h3>This is NOT a set !</h3>
          <p>All same type</p>
          <p>
            <span>2 red and 1 blue</span>
          </p>
          <p>All different numbers</p>
          <p>All same shadows</p>
        </div>
      </section>
    </InstructionsWrapper>
  );
}
