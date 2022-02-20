import React from "react";
import { ConstructionWrapper } from "./UnderConstruction-style";
import { Link } from "react-router-dom";
export default function UnderConstruction() {
  return (
    <ConstructionWrapper>
      <h1>Under construction</h1>
      <p> We are building more features for you to enjoy</p>
      <Link to="/">Menu</Link>
    </ConstructionWrapper>
  );
}
