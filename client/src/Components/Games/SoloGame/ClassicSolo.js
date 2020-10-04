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
    socket: socket,
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
    console.log("I did mount with board", this.state.board);

    this.state.socket.open();
    this.state.socket.emit("createGame", {
      type: "classicSolo",
      player: socket.id,
    });
    //Catch the server message "startGame"
    this.state.socket.on("newGame", (data) => {
      this.setState(data.newGame);
    });
  }
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

  giveHint = () => {
    this.setState((state, props) => {
      return { showHint: !state.showHint };
    });

    setTimeout(() => {
      this.setState((state, props) => {
        return { showHint: !state.showHint };
      });
    }, 3000);
  };

  // componentWillUnmount() {
  //   this.state.socket.close();
  // }

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

            <GameBtn disabled={this.state.showHint} onClick={this.giveHint}>
              Hint
            </GameBtn>

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
