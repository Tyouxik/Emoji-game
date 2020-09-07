import React from "react";
import LaughEmo from "../../Images/Lotties/laugh-emoji.json";
import Lottie from "react-lottie";
import { LandingWrapper, LandingLink } from "./style-landing";

export default function Landing() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LaughEmo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <LandingWrapper>
      <div id="landing">
        <h1 id="title">Emoji Set</h1>
        <div className="laugh">
          <Lottie options={defaultOptions} />
        </div>
        <div className="links">
          <LandingLink to="/sologame">Classic Solo</LandingLink>
          <LandingLink to="/instructions">Instructions</LandingLink>
          <LandingLink to="/allcardssolo">All Cards Solo</LandingLink>
        </div>
      </div>
    </LandingWrapper>
  );
}
