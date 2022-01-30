import React from "react";
import LaughEmo from "../../Images/Lotties/laugh-emoji.json";
import Lottie from "react-lottie";
import { LandingWrapper, LandingLink } from "./style-landing";

export default function Landing() {
  return (
    <LandingWrapper>
      <div className="grid-container">
        <div className="Navbar">
          <h1 id="title">Emoji Set</h1>
        </div>
        <div className="Main">
          <div className="mainBox">
            <LandingLink to="/classicsolo">Classic Solo</LandingLink>
          </div>
        </div>
        <div className="Footer"></div>
      </div>
    </LandingWrapper>
  );
}
