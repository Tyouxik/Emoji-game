import React from "react";
import { Link } from "react-router-dom";

export default function Score(props) {
  const { foundSets } = props;

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <h1>In 10 minutes</h1>
      <p>
        You found{" "}
        {foundSets.length === 0
          ? "no set"
          : foundSets.length === 1
          ? "one set"
          : `${foundSets.length} sets`}
      </p>
      <button onClick={refreshPage}>New Game</button>
      <Link to="/">Menu</Link>
    </div>
  );
}
