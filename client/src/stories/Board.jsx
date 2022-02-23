/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
/* import Animista, {AnimistaTypes} from 'react-animista';
 */
import './Board.css';
import classNames from 'classnames';

export default function Board({children}) {
  const boardStyle = classNames('board', {withCards: children});

  if (!children) {
    return (
      <div className={boardStyle}><h2>Preparing game ...</h2></div>
    );
  }

  return (
    <div className={boardStyle}>{children}</div>
  );
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
  selectCard: PropTypes.func.isRequired,
  selectedCards: PropTypes.array.isRequired,
};

{/* <Animista
    className="board-box"
    tag="div"
    type={AnimistaTypes.SCALE_UP_CENTER}
    width="200px"
    duration="2000"
  > */}
{/* </Animista> */}
