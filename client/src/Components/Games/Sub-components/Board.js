import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Board(props) {
  const { boardCards, selectCard } = props;
  return (
    <div>
      {boardCards.map((card) => {
        return <Card selectCard={selectCard} key={card.image} card={card} />;
      })}
    </div>
  );
}
