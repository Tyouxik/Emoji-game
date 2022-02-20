// import Timer from "../Sub-components/Timer";
import Board from "../Components/Sub-components/Board";
import Score from "../Components/Sub-components/Score";
import Timer from "../Components/Sub-components/Timer";
import { Classicsolo } from "./ClassicSolo-style";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";
// import { GameBtn } from "./ClassicSolo-style";
import React, { useEffect, useReducer } from "react";
import { gameReducer } from "../reducers/gameReducer";

const io = require("socket.io-client");
const socket = io(
  process.env.REACT_APP_BACKEND_URL_EXT || "http://localhost:4000"
);

//Event emiter

const initialState = {
  socket: socket,
  type: "classicSolo",
  passcode: "",
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

export default function ClassicSolo() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    state.socket.open();
    state.socket.emit("game:create", {
      type: state.type,
      socketId: state.socket.id,
    });
    state.socket.on("game:create", (data) => {
      console.log(socket.id);
      this.setState(data.newGame);
    });
  }, []);

  return <div>ClassicSolo</div>;
}

/* 
export default class ClassicSolo extends Component {
  state = {
    socket: socket,
    type: "classicSolo",
    passcode: "",
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

  giveHint = () => {
    this.setState((state, props) => {
      return { showHint: !state.showHint };
    });
    if (this.state.setsOnBoard.length === 0) {
      this.setState((state, props) => {
        return { message: "There is no set, add 3 cards" };
      });
    }
    setTimeout(() => {
      this.setState((state, props) => {
        return { showHint: !state.showHint, message: "" };
      });
    }, 500);
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
        <Classicsolo>
          <h1 className="title">Classic Solo</h1>

          <Container className="game-box">
            <Timer maxMins={10} handleTimer={this.handleTimer} />
            <p>Deck: {this.state.deck.length} cards</p>
            <p>You found: {this.state.foundSets.length} sets</p>
          </Container>
          <Container className="message-box">
            <p>{this.state.message}</p>
          </Container>
          <ButtonGroup
            className="btn-box"
            size="large"
            // color="primary"
            // aria-label="large outlined primary button group"
          >
            <Button variant="contained" onClick={this.add3Cards}>
              Add 3 cards
            </Button>
            <Button
              variant="contained"
              color="default"
              onClick={this.giveHint}
              disabled={this.state.showHint}
            >
              Hint
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.checkSet}
              disabled={this.state.selectedCards.length !== 3}
            >
              SET !
            </Button>
          </ButtonGroup>

          <Board
            selectCard={this.selectCard}
            board={this.state.board}
            selectedCards={this.state.selectedCards}
            setsOnBoard={this.state.setsOnBoard}
            showHint={this.state.showHint}
          />
        </Classicsolo>
      );
    } else {
      return <Score foundSets={this.state.foundSets || []} />;
    }
  }
}
 */
