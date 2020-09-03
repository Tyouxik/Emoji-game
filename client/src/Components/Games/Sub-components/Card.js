import React from "react";
import { CardImg } from "./style-Card.js";

export default function Card(props) {
  const { card, selectCard, isSelected } = props;
  return (
    <CardImg
      isSelected={isSelected}
      onClick={() => selectCard(card.id)}
      id={card.id}
      src={`images/${card.image}`}
      alt={card.image}
    />
  );
}
