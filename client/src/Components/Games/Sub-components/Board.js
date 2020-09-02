import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Board(props) {
  const [selectedCards, setSelectedCards] = useState([]);
  const { boardCards } = props;

  function selectCard(event) {
    const targetID = event.target.id;
    let selectedCard = boardCards.find((card) => card.id === targetID);
    //Select a card
    if (selectedCards.length < 3 && !selectedCards.includes(selectedCard)) {
      setSelectedCards([...selectedCards, selectedCard]);
    }
    //Unselect a card
    else if (selectedCards.includes(selectedCard)) {
      let newSelection = [...selectedCards];
      newSelection.pop(selectedCard);
      setSelectedCards(newSelection);
    }
    return selectedCards.map((card) => card.id);
  }

  function clearSelection() {
    setSelectedCards([]);
  }

  console.log(selectedCards);
  return (
    <div>
      {boardCards.map((card) => {
        return (
          <Card
            selectCard={selectCard}
            key={card.image}
            card={card}
            selectedCards={selectedCards}
            clearSelection={clearSelection}
          />
        );
      })}
    </div>
  );
}
