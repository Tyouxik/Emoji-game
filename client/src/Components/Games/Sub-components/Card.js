import React, { useState } from "react";
import { CardImg } from "./style-Card.js";
import { checkIfSet } from "../../../Game Logic/game";

export default function Card(props) {
  const [isSelected, setIsSelected] = useState(false);
  const { card, selectCard, selectedCards, clearSelection } = props;

  const selection = (event) => {
    selectCard(event);
    if (selectedCards.length === 2) {
      const checked = checkIfSet(selectedCards);
      // checked? isASet():isNotASet();
      clearSelection();
      console.log(checked);
    }
  };

  // if (selectedCardsId.includes(event.target.id)) {
  //   setIsSelected(true);
  // } else {
  //   setIsSelected(false);
  // }

  return (
    <CardImg
      isSelected={isSelected}
      onClick={selection}
      id={card.id}
      src={`images/${card.image}`}
      alt={card.image}
    />
  );
}
