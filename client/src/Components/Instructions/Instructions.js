import React from "react";
import ExampleCard from "../../Images/images/cool-yellow-2-none.jpg";
import { InstructionsWrapper, FeatureList } from "./style-instructions";

export default function Instructions() {
  return (
    <InstructionsWrapper>
      <header>
        <h1 id="title">Instructions</h1>
      </header>
      <section id="feature-wrapper">
        <div id="card-features">
          <h2>Each card as 4 features:</h2>
          <FeatureList>
            <li>Type: cool, laugh, hug</li>
            <li>Color: yellow, blue, red</li>
            <li>Number: 1, 2, 3</li>
            <li>Shadow: left, right, none</li>
          </FeatureList>
        </div>
        <div id="card-example">
          <img src={ExampleCard} titre="Example card" alt="example card" />
          <p>cool, yellow, 2, none</p>
        </div>
      </section>
      <section id="instructions-wrapper">
        <p>
          A 'Set' consists of three cards in which each feature is EITHER the
          same on each card OR is different on each card. That is to say, any
          feature in the 'Set' of three cards is either common to all three
          cards or is different on each card.
        </p>
      </section>
      <section id="good-example-wrapper">
        <div id="good-example">
          <img
            class="set-example"
            src="../../Images/images/cool-yellow-2-none.jpg"
            alt="cool-yellow-2-none"
          />
          <img
            class="set-example"
            src="../../Images/images/cool-red-2-left.jpg"
            alt="cool-red-2-left"
          />
          <img
            class="set-example"
            src="../../Images/images/cool-blue-2-right.jpg"
            alt="cool-blue-2-right"
          />
        </div>
        <div>
          <p>Explanations</p>
        </div>
      </section>
      <section id="bad-example-wrapper">
        <div id="bad-example">
          <p>Insert example</p>
        </div>
        <div>
          <p>Explanations</p>
        </div>
      </section>
    </InstructionsWrapper>
  );
}
