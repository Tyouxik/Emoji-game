import React from "react";
import { CardImg } from "./Card-style.js";

export default function Card(props) {
  const { card, selectCard, isSelected, showHint, isHint } = props;

  // let className = "card";
  // if (isSelected) {
  //   className += " selected";
  // }

  // return (
  //   <img
  //     className={className}
  //     id={card.id}
  //     src={`images/${card.imagePath}`}
  //     alt={card.image}
  //   />
  // );

  return (
    <CardImg
      showHint={showHint}
      isHint={isHint}
      isSelected={isSelected}
      onClick={() => selectCard(card.id)}
      id={card.id}
      src={`images/${card.imagePath}`}
      alt={card.image}
    />
  );
}
