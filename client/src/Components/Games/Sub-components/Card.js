import React from "react";
for (let i = 0; i <= 81; i++) {}

export default function Card(props) {
  const { card, id } = props;
  let styles = {
    width: "250px",
    border: "1px solid black",
    borderRadius: "20px",
  };
  return (
    <img
      key={card.image}
      id={id}
      src={`images/${card.type}-${card.color}-${card.number}-${card.shadow}.jpg`}
      alt={`{card.type}-{card.color}-{card.number}-{card.shadow}`}
      style={styles}
    />
  );
}
