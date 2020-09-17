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
import { GameBtn } from "./ClassicMulti-style";
import React, { Component } from "react";
const io = require("socket.io-client");

const socket = io("http://localhost:4000");

/*
GET https://localhost:4000/socket.io/?EIO=3&transport=polling&t=NIOTsB3 net::ERR_SSL_PROTOCOL_ERROR

Error: No default engine was specified and no extension was provided.
    at new View (/Users/piolin/Documents/WebDevProjects/EmojiGame/ReactEmoji/EmojiGame/node_modules/express/lib/view.js:61:11)
    at Function.render (/Users/piolin/Documents/WebDevProjects/EmojiGame/ReactEmoji/EmojiGame/node_modules/express/lib/application.js:570:12)
    at ServerResponse.render (/Users/piolin/Documents/WebDevProjects/EmojiGame/ReactEmoji/EmojiGame/node_modules/express/lib/response.js:1008:7)
    at /Users/piolin/Documents/WebDevProjects/EmojiGame/ReactEmoji/EmojiGame/app.js:41:7
    at Layer.handle_error (/Users/piolin/Documents/WebDevProjects/EmojiGame/ReactEmoji/EmojiGame/node_modules/express/lib/router/layer.js:71:5)
    at trim_prefix (/Users/piolin/Documents/WebDevProjects/EmojiGame/ReactEmoji/EmojiGame/node_modules/express/lib/router/index.js:315:13)
    at /Users/piolin/Documents/WebDevProjects/EmojiGame/ReactEmoji/EmojiGame/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/Users/piolin/Documents/WebDevProjects/EmojiGame/ReactEmoji/EmojiGame/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/piolin/Documents/WebDevProjects/EmojiGame/ReactEmoji/EmojiGame/node_modules/express/lib/router/index.js:275:10)
    at Layer.handle_error (/Users/piolin/Documents/WebDevProjects/EmojiGame/ReactEmoji/EmojiGame/node_modules/express/lib/router/layer.js:67:12)
*/
export default class ClassicMulti extends Component {
  state = {
    deck: [],
    boardCards: [],
    selectedCards: [],
    foundSets: [],
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
    //emit board to Socket server
    window.console.log("trying to connect to socket...");
    socket.on("connect", () => {
      socket.emit("hey", { data: this.state.boardCards });
    });
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
  render() {
    return (
      <>
        <div>
          <h1 id="title">Classic Multi</h1>
        </div>
        <div id="stats">
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
        />
      </>
    );
  }
}
