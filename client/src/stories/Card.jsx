import React from "react";
import { CardImg } from "./Card-style.js";

export default function Card(props) {
  const { card, selectCard, isSelected, showHint, isHint } = props;
  let divStyle = classnames({
      'selected': isSelected,
      'hint': showHint && isHint,
  })
  return (
      <div className={divStyle}>
          <img src={`images/${card.imagePath}`} alt={card.image} />
      </div>
  );
}
{/* <CardImg
  showHint={showHint}
  isHint={isHint}
  isSelected={isSelected}
  onClick={() => selectCard(card.id)}
  id={card.id}
  src={`images/${card.imagePath}`}
  alt={card.image}
/> */}