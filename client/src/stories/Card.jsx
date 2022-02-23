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
        src={`images-sm/${card.imgName}`}
        alt={card.image} />
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.object,
  selectCard: PropTypes.func,
  isSelected: PropTypes.bool,
  showHint: PropTypes.bool,
  isHint: PropTypes.bool,
};

