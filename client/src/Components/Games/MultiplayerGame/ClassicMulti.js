// import Timer from "../Sub-components/Timer";
import Board from "../Sub-components/Board";
// import Score from "../Sub-components/Score";

import { GameBtn } from "./ClassicMulti-style";
import React, { Component } from "react";
// const io = require("socket.io-client");

// const socket = io();

export default class ClassicMulti extends Component {
  state = {
    deck: [],
    boardCards: [],
    selectedCards: [],
    foundSets: [],
    message: "",
    setsOnBoard: [],
  };

  // componentDidMount() {
  // this.setState((state, props) => ({
  //   deck: shuffleCards(Deck),
  // }));
  // this.setState((state, props) => ({
  //   boardCards: addCard(state.deck, 12),
  // }));
  // this.setState((state, props) => ({
  //   deck: removeCard(state.deck, 12),
  // }));
  // //emit board to Socket server
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     this.state.selectedCards !== prevState.selectedCards &&
  //     this.state.selectedCards.length === 3
  //   ) {
  //     if (!checkIfSet(this.state.selectedCards)) {
  //       this.setState((state, props) => {
  //         {
  //           return (
  //             (state.selectedCards = []), (state.message = "This is not a set")
  //           );
  //         }
  //       });
  //     } else {
  //       this.setState((state, props) => ({
  //         foundSets: addSet(state.selectedCards, state.foundSets),
  //       }));
  //       this.setState((state, props) => ({
  //         boardCards: removeSet(state.selectedCards, state.boardCards),
  //       }));
  //       this.setState((state, props) => {
  //         {
  //           return (
  //             (state.selectedCards = []), (state.message = "This is a set")
  //           );
  //         }
  //       });
  //     }
  //   }
  //   if (this.state.boardCards !== prevState.boardCards) {
  //     console.log("The board has changed", this.state.boardCards);
  //     this.setState((state, props) => ({
  //       setsOnBoard: checkIfSetInBoard(this.state.boardCards),
  //     }));
  //   }
  // }

  // selectCard = (id) => {
  //   this.setState((state, props) => ({
  //     selectedCards: changeSelectedCards(
  //       id,
  //       state.selectedCards,
  //       state.boardCards
  //     ),
  //   }));
  // };

  // add3Cards = () => {
  //   console.log("I add 3 cards");
  //   this.setState((state, props) => ({
  //     boardCards: addCard(state.deck, 3, state.boardCards),
  //   }));
  //   this.setState((state, props) => ({
  //     deck: removeCard(state.deck, 3),
  //   }));
  // };
  render() {
    return (
      <>
        <div>
          <h1 id="title">Classic Multi</h1>
        </div>
        {/* <div id="stats">
          <p>Deck:{this.state.deck.length}</p>
          <p>You found:{this.state.foundSets.length} sets</p>
        </div>
        <div>
          <p>{this.state.message}</p>
          <GameBtn onClick={this.add3Cards}>Add 3 cards</GameBtn>
        </div>

        <Board
          selectCard={this.selectCard}
          boardCards={this.state.boardCards}
          selectedCards={this.state.selectedCards}
        /> */}
      </>
    );
  }
}
