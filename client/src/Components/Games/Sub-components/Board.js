import React from "react";
import Card from "./Card";
import Animista, { AnimistaTypes } from "react-animista";

export default function Board(props) {
  const { board, selectCard, selectedCards, setsOnBoard } = props;
  let selectedCardId = selectedCards.map((card) => card.cardId);
  console.log(setsOnBoard);
  let hintCardId =
    setsOnBoard.length > 0 ? setsOnBoard[0].map((card) => card.id) : [];
  console.log("hintCardId", hintCardId);
  let cards = board.map((card) => {
    let selected = selectedCardId.includes(card.id);
    let hint = hintCardId.includes(card.id);
    return (
      <Card
        isSelected={selected}
        showHint={props.showHint}
        isHint={hint}
        selectCard={selectCard}
        key={card.image}
        card={card}
      />
    );
  });
  return (
    <Animista
      tag="div"
      type={AnimistaTypes.SCALE_UP_CENTER}
      width="200px"
      duration="2000"
    >
      {cards}
    </Animista>
  );
}
