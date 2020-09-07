import { Deck } from "../../../Game Logic/deck";
import Timer from "../Sub-components/Timer";
import Board from "../Sub-components/Board";
import Score from "../Sub-components/Score";
import {
  shuffleCards,
  removeCard,
  addCard,
  changeSelectedCards,
  checkIfSet,
  addSet,
  removeSet,
  checkIfSetInBoard,
} from "../../../Game Logic/game";
import { GameBtn } from "./ClassicSolo-style";
import React, { Component } from "react";

export default class ClassicSolo extends Component {
  state = {
    deck: [],
    boardCards: [],
    selectedCards: [],
    foundSets: [],
    timeIsUp: false,
    message: "",
    setsOnBoard: [],
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

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.selectedCards !== prevState.selectedCards &&
      this.state.selectedCards.length === 3
    ) {
      if (!checkIfSet(this.state.selectedCards)) {
        this.setState((state, props) => {
          {
            return (
              (state.selectedCards = []), (state.message = "This is not a set")
            );
          }
        });
      } else {
        this.setState((state, props) => ({
          foundSets: addSet(state.selectedCards, state.foundSets),
        }));
        this.setState((state, props) => ({
          boardCards: removeSet(state.selectedCards, state.boardCards),
        }));
        this.setState((state, props) => {
          {
            return (
              (state.selectedCards = []), (state.message = "This is a set")
            );
          }
        });
      }
    }
    if (this.state.boardCards !== prevState.boardCards) {
      console.log("The board has changed", this.state.boardCards);
      this.setState((state, props) => ({
        setsOnBoard: checkIfSetInBoard(this.state.boardCards),
      }));
    }
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
    console.log("I add 3 cards");
    this.setState((state, props) => ({
      boardCards: addCard(state.deck, 3, state.boardCards),
    }));
    this.setState((state, props) => ({
      deck: removeCard(state.deck, 3),
    }));
  };

  giveHint = () => {
    console.log("give me a hint");
    console.log(this.state.setsOnBoard);
    if (this.state.setsOnBoard.length === 0) {
      this.setState((state, props) => ({ message: "There is no set, add" }));
    } else if (this.state.setsOnBoard.length === 1) {
      this.setState((state, props) => ({ message: "There is one set" }));
    } else {
      this.setState((state, props) => ({
        message: `There are ${this.state.setsOnBoard.length} sets`,
      }));
    }
  };

  highlightSet = () => {
    console.log("I highlight a set");
  };
  render() {
    if (!this.state.timeIsUp) {
      return (
        <>
          <div>
            <h1 id="title">Classic Solo</h1>
          </div>
          <div id="stats">
            <Timer maxMins={1} handleTimer={this.handleTimer} />
            <p>Deck:{this.state.deck.length}</p>
            <p>You found:{this.state.foundSets.length} sets</p>
          </div>
          <div>
            <p>{this.state.message}</p>
            <GameBtn onClick={this.add3Cards}>Add 3 cards</GameBtn>
            <GameBtn onClick={this.giveHint}>Hint</GameBtn>
            <GameBtn onClick={this.highlightSet}>Find a set</GameBtn>
          </div>

          <Board
            selectCard={this.selectCard}
            boardCards={this.state.boardCards}
            selectedCards={this.state.selectedCards}
          />
        </>
      );
    } else {
      return <Score foundSets={this.state.foundSets || []} />;
    }
  }
}
