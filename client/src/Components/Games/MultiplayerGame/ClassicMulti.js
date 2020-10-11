import Board from "../Sub-components/Board";
import Score from "../Sub-components/Score";
import Timer from "../Sub-components/Timer";

import React, { Component } from "react";
const io = require("socket.io-client");
const socket = io("http://localhost:4000");

export default class ClassicMulti extends Component {
  state = {
    socket: socket,
    type: "classicSolo",
    passcode: "",
    player1: "",
    player2: "",
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
    this.state.socket.open();
    this.state.socket.emit("createGame", {
      type: this.state.type,
      socketId: socket.id,
    });
    this.state.socket.on("newGame", (data) => {
      console.log(socket.id);
      this.setState(data.newGame);
    });
  }

  handleTimer = (boolean) => {
    this.setState((state, props) => ({
      timeIsUp: boolean,
    }));
  };

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
