/* eslint-disable require-jsdoc */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card(props) {
  const {card, selectCard, isSelected, showHint, isHint} = props;

  const cardStyle = classnames('card', {
    'selected': isSelected,
    'hint': showHint && isHint,
  });

  const imgStyle = classnames('card-image');


  return (
    <div className={cardStyle} onClick={() => selectCard(card.id)}>
      <img
        className={imgStyle}
        src={`images/${card.imagePath}`}
        alt={card.image} />
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.array.required,
  selectCard: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  showHint: PropTypes.bool.isRequired,
  isHint: PropTypes.bool.isRequired,
};

