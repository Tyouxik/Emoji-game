// import Timer from "../Sub-components/Timer";
import Board from "../Components/Sub-components/Board";
import Score from "../Components/Sub-components/Score";
import Timer from "../Components/Sub-components/Timer";

// import { GameBtn } from "./ClassicSolo-style";
import React, { Component } from "react";
const io = require("socket.io-client");
const socket = io(
  process.env.REACT_APP_BACKEND_URL_EXT || "http://localhost:4000"
);

//Event emiter

export default class AllCardsSolo extends Component {
  state = {
    socket: socket,
    type: "allCardsSolo",
    passcode: "",
    _id: "",
    board: [],
    selectedCards: [],
    foundSets: [],
    timeIsUp: false,
    message: "",
  };

  componentDidMount() {
    this.state.socket.open();
    this.state.socket.emit("createGame", {
      type: this.state.type,
      socketId: socket.id,
    });
    this.state.socket.on("newGame", (data) => {
      console.log(data.newGame);
      this.setState(data.newGame);
    });
  }

  handleTimer = (boolean) => {
    this.setState((state, props) => ({
      timeIsUp: boolean,
    }));
  };

  selectCard = (id) => {
    socket.emit("clickedCard", {
      gameId: this.state._id,
      player: this.state.player1,
      cardId: id,
    });
    socket.on("selectedCards", (cards) => {
      this.setState({ selectedCards: cards.selectedCards });
    });
    if (this.state.selectedCards.length === 3) {
      setTimeout(() => {});
    }
  };

  // componentWillUnmount() {
  //   this.state.socket.close();
  // }

  add3Cards = () => {
    this.state.socket.emit("add3cards", {
      gameId: this.state._id,
      numOfCards: 3,
    });
    this.state.socket.on("added3cards", (data) => {
      this.setState(data);
    });
  };
  checkSet = () => {
    console.log("I am checking the set");
    this.state.socket.emit("checkIfSet", {
      selectedCards: this.state.selectedCards,
      board: this.state.board,
      gameId: this.state._id,
      foundSets: this.state.foundSets,
      player: this.state._id,
    });
    this.state.socket.on("setChecked", (data) => {
      let { updatedGame, message } = data;
      console.log("this is updatedGame", updatedGame);
      const { setsOnBoard, selectedCards, foundSets, board } = updatedGame;
      console.log(
        "setsOnBoard",
        setsOnBoard,
        "selectedCards",
        selectedCards,
        "foundSets",
        foundSets,
        "board",
        board
      );
      this.setState({ setsOnBoard, selectedCards, foundSets, board });
      this.setState({ message });
    });
  };

  render() {
    console.log("setsonboard", this.state.setsOnBoard);

    if (!this.state.timeIsUp) {
      return (
        <>
          <div>
            <h1 id="title">All Cards Solo</h1>
          </div>
          <div id="stats">
            <Timer maxMins={3} handleTimer={this.handleTimer} />
            <p>Deck:{this.state.board.length}</p>
            <p>You found:{this.state.foundSets.length} sets</p>
          </div>
          <div>
            <p>{this.state.message}</p>
          </div>

          <Board
            selectCard={this.selectCard}
            board={this.state.board}
            selectedCards={this.state.selectedCards}
            setsOnBoard={this.state.setsOnBoard}
            showHint={this.state.showHint}
          />
          {/* <GameBtn
            onClick={this.checkSet}
            disabled={this.state.selectedCards.length !== 3}
          >
            SET!
          </GameBtn> */}
        </>
      );
    } else {
      return <Score foundSets={this.state.foundSets || []} />;
    }
  }
}
