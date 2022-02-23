/* eslint-disable react/prop-types */
import React from 'react';
import Board from './Board';
import Card from './Card';

const nineCardBoard = [
  {
    type: 'cool',
    color: 'yellow',
    number: 1,
    tilted: 'left',
    imgName: 'cool-yellow-1-left.jpg',
    id: '0',
    score: 2211,
  },
  {
    type: 'cool',
    color: 'yellow',
    number: 1,
    tilted: 'right',
    imgName: 'cool-yellow-1-right.jpg',
    id: '1',
    score: 3211,
  },
  {
    type: 'cool',
    color: 'yellow',
    number: 1,
    tilted: 'none',
    imgName: 'cool-yellow-1-none.jpg',
    id: '2',
    score: 1211,
  },
  {
    type: 'cool',
    color: 'yellow',
    number: 2,
    tilted: 'left',
    imgName: 'cool-yellow-2-left.jpg',
    id: '3',
    score: 2212,
  },
  {
    type: 'cool',
    color: 'yellow',
    number: 2,
    tilted: 'right',
    imgName: 'cool-yellow-2-right.jpg',
    id: '4',
    score: 3212,
  },
  {
    type: 'cool',
    color: 'yellow',
    number: 2,
    tilted: 'none',
    imgName: 'cool-yellow-2-none.jpg',
    id: '5',
    score: 1212,
  },
  {
    type: 'cool',
    color: 'yellow',
    number: 3,
    tilted: 'left',
    imgName: 'cool-yellow-3-left.jpg',
    id: '6',
    score: 2213,
  },
  {
    type: 'cool',
    color: 'yellow',
    number: 3,
    tilted: 'right',
    imgName: 'cool-yellow-3-right.jpg',
    id: '7',
    score: 3213,
  },
  {
    type: 'cool',
    color: 'yellow',
    number: 3,
    tilted: 'none',
    imgName: 'cool-yellow-3-none.jpg',
    id: '8',
    score: 1213,
  },
].map((card) => {
  return <Card key={card.id} card={card} />;
});

const twelveCardBoard = [
  {
    type: 'cool',
    color: 'yellow',
    number: 1,
    tilted: 'left',
    imgName: 'cool-yellow-1-left.jpg',
    id: '0',
    score: 2211,
  },
  {
    type: 'cool',
    color: 'yellow',
    number: 1,
    tilted: 'right',
    imgName: 'cool-yellow-1-right.jpg',
    id: '1',
    score: 3211,
  },
  {
    type: 'cool',
    color: 'yellow',
    number: 1,
    tilted: 'none',
    imgName: 'cool-yellow-1-none.jpg',
    id: '2',
    score: 1211,
  },
  {
    type: 'cool',
    color: 'yellow',
    number: 2,
    tilted: 'left',
    imgName: 'cool-yellow-2-left.jpg',
    id: '3',
    score: 2212,
  },
  {
    type: 'cool',
    color: 'yellow',
    number: 2,
    tilted: 'right',
    imgName: 'cool-yellow-2-right.jpg',
    id: '4',
    score: 3212,
  },
  {
    type: 'cool',
    color: 'yellow',
    number: 2,
    tilted: 'none',
    imgName: 'cool-yellow-2-none.jpg',
    id: '5',
    score: 1212,
  },
  {
    type: 'cool',
    color: 'yellow',
    number: 3,
    tilted: 'left',
    imgName: 'cool-yellow-3-left.jpg',
    id: '6',
    score: 2213,
  },
  {
    type: 'cool',
    color: 'yellow',
    number: 3,
    tilted: 'right',
    imgName: 'cool-yellow-3-right.jpg',
    id: '7',
    score: 3213,
  },
  {
    type: 'cool',
    color: 'yellow',
    number: 3,
    tilted: 'none',
    imgName: 'cool-yellow-3-none.jpg',
    id: '8',
    score: 1213,
  },
  {
    type: 'cool',
    color: 'blue',
    number: 1,
    tilted: 'left',
    imgName: 'cool-blue-1-left.jpg',
    id: '9',
    score: 2311,
  },
  {
    type: 'cool',
    color: 'blue',
    number: 1,
    tilted: 'right',
    imgName: 'cool-blue-1-right.jpg',
    id: '10',
    score: 3311,
  },
  {
    type: 'cool',
    color: 'blue',
    number: 1,
    tilted: 'none',
    imgName: 'cool-blue-1-none.jpg',
    id: '11',
    score: 1311,
  },
].map((card) => {
  return <Card key={card.id} card={card} />;
});

export default {
  title: 'Board',
  component: Board,
};


export const EmptyBoard = (args) => <Board></Board>;

export const NineCardBoard = (args) => <Board {...args}></Board>;
NineCardBoard.args = {
  children: nineCardBoard,
};

export const TwelveCardBoard = (args) => <Board {...args}></Board>;
TwelveCardBoard.args = {
  children: twelveCardBoard,
};
