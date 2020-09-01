import React from "react";
for (let i = 0; i <= 81; i++) {}

export default function Card(props) {
  const { card, id, selectCard } = props;
  let styles = {
    width: "250px",
    border: "1px solid black",
    borderRadius: "20px",
  };
  return (
    <img
      onClick={selectCard}
      id={card.id}
      src={`images/${card.image}`}
      alt={card.image}
      style={styles}
    />
  );
}
