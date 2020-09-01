import React, { useState } from "react";
import Card from "./Card";

export default function Board(props) {
  const [selectedCards, setSelectedCards] = useState([]);
  const { boardCards } = props;

  function selectCard(event) {
    const targetID = event.target.id;
    let selectedCard = boardCards.find((card) => card.id === targetID);
    if (selectedCards.length < 3 && !selectedCards.includes(selectedCard)) {
      selectedCards.push(selectedCard);
    } else {
      selectedCards.pop(selectedCard);
    }
    console.log(selectedCards);
  }
  return (
    <div>
      {(props.boardCards || []).map((card) => {
        return (
          <Card
            selectCard={selectCard}
            key={card.id}
            card={card}
            selectedCards={selectedCards}
          />
        );
      })}
    </div>
  );
}
