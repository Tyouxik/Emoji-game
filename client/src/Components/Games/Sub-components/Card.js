import React, { useState, useEffect } from "react";
import { CardImg } from "./style-Card.js";

export default function Card(props) {
  const [isSelected, setIsSelected] = useState(false);
  const { card, selectCard, selectedCards } = props;

  const selection = (event) => {
    let selectedCardsId = selectCard(event);

    console.log(selectedCards, selectedCardsId, event.target.id);
    console.log(selectedCardsId.includes(event.target.id));
    if (selectedCardsId.includes(event.target.id)) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };
  return (
    <>
      <p>{card.id}</p>
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
