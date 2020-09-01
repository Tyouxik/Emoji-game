import React, { useState, useEffect } from "react";
import { Deck } from "../../../Game Logic/deck";
import Timer from "../Sub-components/Timer";
import Board from "../Sub-components/Board";
import { shuffleCards, pick } from "../../../Game Logic/game";

export default function SoloGame(props) {
  // //     selectedIndex = [];
  // //     discartedCards = [];
  // const [foundSets, setFoundSets] = useState(0);
  const [boardCards, setBoardCards] = useState([]);
  const [timeIsUp, setTimeIsUp] = useState(false);
  const [deck, setDeck] = useState(Deck);

  // Shuffle cards at the beginning of the game
  useEffect(() => {
    // console.log("I am shuffling");
    setDeck((deck) => {
      shuffleCards(deck);
    });
  }, []);

  //Add 12 cards to the board at the beginning of the game
  useEffect(() => {
    // console.log("I am pickingup cards");
    // setBoardCards((boardCards) => {
    pick(12, boardCards, deck);

    // });
  }, []);

  if (timeIsUp) {
    return <h1>Time is up</h1>; //score component
  } else {
    return (
      <>
        <Timer maxMins={10} setTimeIsUp={setTimeIsUp} />
        <div>
          <h1 id="title">Game On</h1>
        </div>

        <Board boardCards={boardCards} />
      </>
    );
  }
}
