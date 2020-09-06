import React from "react";

export default function Score(props) {
  const { foundSets } = props;
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
    </div>
  );
}
