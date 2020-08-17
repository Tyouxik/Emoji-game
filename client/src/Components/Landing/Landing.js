import React from "react";
import { Link } from "react-router-dom";
import LaughEmo from "../../Images/Lotties/laugh-emoji.json";
import Lottie from "react-lottie";
import LandingWrapper from "./style-landing";

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
      <div id="starting-links">
        <Lottie
          class="laugh"
          options={defaultOptions}
          height={200}
          width={200}
        />
        <Link to="/game">New Game</Link>
        <Link to="/instructions">Instructions</Link>
      </div>
    </LandingWrapper>
  );
}
