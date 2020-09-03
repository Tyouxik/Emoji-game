import { Deck } from "../../../Game Logic/deck";
import Timer from "../Sub-components/Timer";
import Board from "../Sub-components/Board";
import {
  shuffleCards,
  removeCard,
  addCard,
  changeSelectedCards,
  checkIfSet,
} from "../../../Game Logic/game";
import { GameBtn } from "./style-SoloGame";
import React, { Component } from "react";

export default class SoloGame extends Component {
  state = {
    deck: [],
    boardCards: [],
    selectedCards: [],
    timeIsUp: false,
    message: "",
  };

  componentDidMount() {
    this.setState((state, props) => ({
      deck: shuffleCards(Deck),
    }));
    this.setState((state, props) => ({
      boardCards: addCard(state.deck, 12),
    }));
    this.setState((state, props) => ({
      deck: removeCard(state.deck, 12),
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
    this.setState((state, props) => {
      if (state.selectedCards.length === 3) {
        if (!checkIfSet(state.selectedCards)) {
          {
            return (
              (state.selectedCards = []), (state.message = "This is not a set")
            );
          }
        } else {
          console.log("this is a set");
        }
      }
    });
  };
  add3Cards = () => {
    console.log("I add 3 cards");
    this.setState((state, props) => ({
      boardCards: addCard(state.deck, 3, state.boardCards),
    }));
    this.setState((state, props) => ({
      deck: removeCard(state.deck, 3),
    }));
  };

  render() {
    // console.log("deck", this.state.deck, "boardCards", this.state.boardCards);
    console.log("selectedCards", this.state.selectedCards, this.state.message);
    if (!this.state.timeIsUp) {
      return (
        <>
          <Timer maxMins={10} handleTimer={this.handleTimer} />
          <div>
            <h1 id="title">Game On</h1>
          </div>
          <p>{this.state.message}</p>
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
