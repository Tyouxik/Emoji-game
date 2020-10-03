// import Timer from "../Sub-components/Timer";
import Board from "../Sub-components/Board";
import Score from "../Sub-components/Score";
import { GameBtn } from "./ClassicSolo-style";

// import { GameBtn } from "./ClassicSolo-style";
import React, { Component } from "react";
const io = require("socket.io-client");
const socket = io("http://localhost:4000");

//Event emiter

export default class ClassicSolo extends Component {
  state = {
    _id: "",
    deck: [],
    board: [],
    selectedCards: [],
    foundSets: [],
    timeIsUp: false,
    message: "",
    setsOnBoard: [],
    showHint: false,
  };

  componentDidMount() {
    socket.on("connect", () => {
      console.log(socket.id);
      socket.emit("createGame", { type: "classicSolo", player: socket.id });
      //Catch the server message "startGame"

      socket.on("newGame", (data) => {
        this.setState(data.newGame);
      });
    });
  }

  // componentDidUpdate(prevProps, prevState) {

  // }
  // handleTimer = (boolean) => {
  //   this.setState((state, props) => ({
  //     timeIsUp: boolean,
  //   }));
  // };

  selectCard = (id) => {
    socket.emit("clickedCard", {
      gameId: this.state._id,
      player: this.state.player1,
      cardId: id,
    });
    socket.on("selectedCards", (cards) => {
      this.setState({ selectedCards: cards.selectedCards });
    });
  };

  // add3Cards = () => {
  //   console.log("I add 3 cards");
  //   this.setState((state, props) => ({
  //     boardCards: addCard(state.deck, 3, state.boardCards),
  //   }));
  //   this.setState((state, props) => ({
  //     deck: removeCard(state.deck, 3),
  //   }));
  // };

  giveHint = () => {
    this.setState((state, props) => {
      return { showHint: !state.showHint };
    });
  };

  render() {
    if (!this.state.timeIsUp) {
      return (
        <>
          <div>
            <h1 id="title">Classic Solo</h1>
          </div>
          <div id="stats">
            {/* <Timer maxMins={1} handleTimer={this.handleTimer} />
            <p>Deck:{this.state.deck.length}</p>
            <p>You found:{this.state.foundSets.length} sets</p> */}
          </div>
          <div>
            <p>{this.state.message}</p>
            {/* <GameBtn onClick={this.add3Cards}>Add 3 cards</GameBtn> */}
            <GameBtn onClick={this.giveHint}>Hint</GameBtn>
            {/* <GameBtn onClick={this.highlightSet}>Find a set</GameBtn> */}
          </div>

          <Board
            selectCard={this.selectCard}
            board={this.state.board}
            selectedCards={this.state.selectedCards}
            setsOnBoard={this.state.setsOnBoard}
            showHint={this.state.showHint}
          />
        </>
      );
    } else {
      return <Score foundSets={this.state.foundSets || []} />;
    }
  }
}
