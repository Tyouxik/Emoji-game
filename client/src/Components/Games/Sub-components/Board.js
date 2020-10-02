import React from "react";
import Card from "./Card";

export default function Board(props) {
  const { board, selectCard, selectedCards, setsOnBoard } = props;
  let selectedCardId = selectedCards.map((card) => card.cardId);
  console.log(setsOnBoard[0]);

  let cards = board.map((card) => {
    let selected = selectedCardId.includes(card.id);
    return (
      <Card
        isSelected={selected}
        selectCard={selectCard}
        key={card.image}
        card={card}
      />
    );
  });
  return <div>{cards}</div>;
}
