import React from "react";
import { CardImg } from "./Card-style.js";
import Animista, { AnimistaTypes } from "react-animista";

export default function Card(props) {
  const { card, selectCard, isSelected } = props;
  return (
    <Animista type={AnimistaTypes.SCALE_UP_TOP}>
      <CardImg
        isSelected={isSelected}
        onClick={() => selectCard(card.id)}
        id={card.id}
        src={`images/${card.imagePath}`}
        alt={card.image}
      />
    </Animista>
  );
}
