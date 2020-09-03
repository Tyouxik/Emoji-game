import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Board(props) {
  const { boardCards, selectCard, selectedCards } = props;
  return (
    <div>
      {boardCards.map((card) => {
        console.log(card);
        return selectedCards.includes(card) ? (
          <Card
            isSelected={true}
            selectCard={selectCard}
            key={card.image}
            card={card}
          />
        ) : (
          <Card
            isSelected={false}
            selectCard={selectCard}
            key={card.image}
            card={card}
          />
        );
      })}
    </div>
  );
}
