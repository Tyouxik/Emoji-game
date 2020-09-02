import React, { useState, useEffect } from "react";
import { Deck } from "../../../Game Logic/deck";
import Timer from "../Sub-components/Timer";
import Board from "../Sub-components/Board";
import { shuffleCards, pick } from "../../../Game Logic/game";
import { GameBtn } from "./style-SoloGame";
import Card from "../Sub-components/Card";

export default function SoloGame(props) {
  // //     selectedIndex = [];
  // //     discartedCards = [];
  // const [foundSets, setFoundSets] = useState(0);
  const [boardCards, setBoardCards] = useState([]);
  const [timeIsUp, setTimeIsUp] = useState(false);
  const [deck, setDeck] = useState([]);

  // Shuffle cards at the beginning of the game
  useEffect(() => {
    setDeck(shuffleCards(Deck));
  }, [deck]);

  //Add 12 cards to the board at the beginning of the game
  useEffect(() => {
    if (deck.length !== 0) {
      let displayCards = [];
      for (let i = 0; i < 12; i++) {
        displayCards.push(deck.pop());
      }
      setBoardCards(displayCards);
    }
  }, [deck, setBoardCards]);

  //Add 3 cards to the board
  const add3Cards = () => {
    console.log("I add 3 cards");
    let addedCards = [];
    if (deck.length !== 0) {
      for (let i = 0; i < 3; i++) {
        addedCards.push(deck.pop());
      }
    }
    setBoardCards([...boardCards, ...addedCards]);
  };

  if (!timeIsUp) {
    return (
      <>
        <Timer maxMins={10} setTimeIsUp={setTimeIsUp} />
        <div>
          <h1 id="title">Game On</h1>
        </div>
        <GameBtn onClick={add3Cards}>Add 3 cards</GameBtn>
        <Board boardCards={boardCards} />
      </>
    );
  } else {
    return <h1>Time is up</h1>; //score component
  }
}
