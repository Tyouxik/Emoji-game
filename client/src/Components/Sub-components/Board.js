import React from "react";
import Card from "./Card";
import Animista, { AnimistaTypes } from "react-animista";
import { CardBoard } from "./Board-style";

export default function Board(props) {
  const { board, selectCard, selectedCards, setsOnBoard } = props;
  let selectedCardId = selectedCards.map((card) => card.cardId);
  let randomSet = setsOnBoard
    ? Math.floor(Math.random() * setsOnBoard.length)
    : 0;
  let hintCardId =
    setsOnBoard && setsOnBoard.length > 0
      ? setsOnBoard[randomSet].map((card) => card.id)
      : [];

  let cards = board.map((card) => {
    let selected = selectedCardId.includes(card.id);
    let hint = hintCardId.includes(card.id);
    return (
      <Card
        isSelected={selected}
        showHint={props.showHint || false}
        isHint={hint}
        selectCard={selectCard}
        key={card.image}
        card={card}
      />
    );
  });
  return (
    <Animista
      className="board-box"
      tag="div"
      type={AnimistaTypes.SCALE_UP_CENTER}
      width="200px"
      duration="2000"
    >
      <CardBoard>{cards}</CardBoard>
    </Animista>
  );
}
