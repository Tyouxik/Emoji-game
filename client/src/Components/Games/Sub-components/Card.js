import React from "react";

export default function Card(props) {
  const { key, card } = props;
  return (
    <div key={key}>
      <h3>
        `../../Images/images/{card.type}-{card.color}-{card.number}-
        {card.shadow}.jpg`
      </h3>
      <img
        src={`../../Images/images/{card.type}-{card.color}-{card.number}-{card.shadow}.jpg`}
        alt={`{card.type}-{card.color}-{card.number}-{card.shadow}`}
      />
    </div>
  );
}
