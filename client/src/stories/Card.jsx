import React from "react";
import classnames from "classnames";
import './Card.css'

export default function Card(props) {
  const { card, selectCard, isSelected, showHint, isHint } = props;

  const cardStyle = classnames('card',{
      'selected': isSelected,
      'hint': showHint && isHint,
  });

  const imgStyle = classnames('card-image');

  

  return (
      <div className={cardStyle} /* onClick={() => selectCard(card.id)} */>
          <img className={imgStyle} src={`images/${card.imagePath}`} alt={card.image} />
      </div>
  );
}
