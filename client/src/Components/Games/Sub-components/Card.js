import React, { useState } from "react";
import { CardImg } from "./style-Card.js";
import { checkIfSet } from "../../../Game Logic/game";

export default function Card(props) {
  const [isSelected, setIsSelected] = useState(false);
  const { card, selectCard } = props;
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
