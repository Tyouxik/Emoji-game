import React from "react";
import { LandingWrapper, LandingLink } from "./style-landing";
import SwipeableTextMobileStepper from "./Sub-components/Instructions-carousel";

export default function Landing() {
  return (
    <LandingWrapper>
      <div id="landing">
        <h1 id="title">Emoji Set</h1>
        <SwipeableTextMobileStepper></SwipeableTextMobileStepper>
        <div className="links">
          <LandingLink to="/classicsolo">Classic Solo</LandingLink>
          <LandingLink to="/allcardssolo">All Cards Solo</LandingLink>
        </div>
      </div>
    </LandingWrapper>
  );
}
