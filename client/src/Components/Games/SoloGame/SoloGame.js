import { Deck } from "../../../Game Logic/deck";
import Timer from "../Sub-components/Timer";
import Board from "../Sub-components/Board";
import {
  shuffleCards,
  pickCard,
  addCard,
  changeSelectedCards,
} from "../../../Game Logic/game";
import { GameBtn } from "./style-SoloGame";
import React, { Component } from "react";

export default class SoloGame extends Component {
  state = {
    deck: [],
    boardCards: [],
    selectedCards: [],
    timeIsUp: false,
  };

  componentDidMount() {
    this.setState((state, props) => ({
      deck: pickCard(shuffleCards(Deck), 12),
    }));
    this.setState((state, props) => ({
      boardCards: addCard(state.deck, 12),
    }));
  }
  handleTimer = (boolean) => {
    this.setState((state, props) => ({
      timeIsUp: boolean,
    }));
  };

  selectCard = (id) => {
    this.setState((state, props) => ({
      selectedCards: changeSelectedCards(
        id,
        state.selectedCards,
        state.boardCards
      ),
    }));
  };
  add3Cards = () => {
    this.setState((state, props) => ({
      deck: pickCard(shuffleCards(Deck), 3),
    }));
    this.setState((state, props) => ({
      boardCards: addCard(state.deck, 3, state.boardCards),
    }));
  };

  render() {
    // console.log(
    //   "deck",
    //   this.state.deck,
    //   "boardCards",
    //   this.state.boardCards,
    //   "selectedCards",
    //   this.state.selectedCards
    // );
    console.log(this.state.selectedCards);
    if (!this.state.timeIsUp) {
      return (
        <>
          <Timer maxMins={10} handleTimer={this.handleTimer} />
          <div>
            <h1 id="title">Game On</h1>
          </div>
          <GameBtn onClick={this.add3Cards}>Add 3 cards</GameBtn>
          <Board
            selectCard={this.selectCard}
            boardCards={this.state.boardCards}
            selectedCards={this.state.selectedCards}
          />
        </>
      );
    } else {
      return <h1>Time is up</h1>; //score component
    }
  }
}
