import Timer from "../Sub-components/Timer";
import Board from "../Sub-components/Board";
import Score from "../Sub-components/Score";

import React, { Component } from "react";

export default class AllCardsSolo extends Component {
  state = {
    boardCards: [],
    selectedCards: [],
    foundSets: [],
    timeIsUp: false,
    message: "",
    setsOnBoard: [],
  };

  componentDidMount() {
    // this.setState((state, props) => ({
    //   boardCards: shuffleCards(Deck),
    // }));
  }

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
  handleTimer = (boolean) => {
    this.setState((state, props) => ({
      timeIsUp: boolean,
    }));
  };

  // selectCard = (id) => {
  //   this.setState((state, props) => ({
  //     selectedCards: changeSelectedCards(
  //       id,
  //       state.selectedCards,
  //       state.boardCards
  //     ),
  //   }));
  // };
  render() {
    if (!this.state.timeIsUp) {
      return (
        <>
          <div>
            <h1 id="title">All Cards Solo</h1>
          </div>
          <div id="stats">
            <Timer maxMins={10} handleTimer={this.handleTimer} />
            <p>Remaining cards:{this.state.boardCards.length}</p>
            <p>You found:{this.state.foundSets.length} sets</p>
          </div>
          <div>
            <p>{this.state.message}</p>
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
