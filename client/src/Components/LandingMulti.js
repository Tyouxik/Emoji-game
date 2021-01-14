import React from "react";
import { LandingWrapper, LandingLink } from "./style-landing";

export default function LandingMulti() {
  return (
    <LandingWrapper>
      <div id="landing">
        <h1 id="title">Emoji Set</h1>
        <div className="laugh"></div>
        <div className="links">
          <LandingLink to="/classicmulti">Create a game</LandingLink>
          <LandingLink to="/classicmulti">Join a game</LandingLink>
          <LandingLink to="/">Menu</LandingLink>
        </div>
      </div>
    </LandingWrapper>
  );
}
