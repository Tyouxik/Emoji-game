import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Board(props) {
  const [selectedCards] = useState([]);
  const { boardCards } = props;

  function selectCard(event) {
    const targetID = event.target.id;
    let selectedCard = boardCards.find((card) => card.id === targetID);
    if (selectedCards.length < 3 && !selectedCards.includes(selectedCard)) {
      selectedCards.push(selectedCard);
    } else if (selectedCards.includes(selectedCard)) {
      selectedCards.pop(selectedCard);
    }
    return selectedCards.map((card) => card.id);
  }
  return (
    <div>
      {boardCards.map((card) => {
        return (
          <Card
            selectCard={selectCard}
            key={card.image}
            card={card}
            selectedCards={selectedCards}
          />
        );
      })}
    </div>
  );
}
