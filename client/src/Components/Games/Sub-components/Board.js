import React from "react";
import Card from "./Card";

export default function Board(props) {
  console.log(props.boardCards);
  return (
    <div>
      <h1>I am bored: {props.boardCards}</h1>
      {props.boardCards.map((card, idx) => {
        return <Card key={idx} card={card} />;
      })}
    </div>
  );
}
