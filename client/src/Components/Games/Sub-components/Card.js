import React, { useState, useEffect } from "react";
import { CardImg } from "./style-Card.js";

export default function Card(props) {
  const [isSelected, setIsSelected] = useState(false);
  const { card, selectCard, selectedCards } = props;

  const selection = (event) => {
    let selectedCardsId = selectedCards.map((card) => card.id);
    selectCard(event);
    console.log(selectedCardsId, event.target.id);
    console.log(selectedCardsId.includes(event.target.id));
    if (selectedCardsId.includes(event.target.id)) {
      return setIsSelected(true);
    }
  };
  return (
    <>
      <CardImg
        isSelected={isSelected}
        onClick={selection}
        id={card.id}
        src={`images/${card.image}`}
        alt={card.image}
      />
    </>
  );
}
