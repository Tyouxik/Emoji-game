var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const {
  generatePasscode,
  removeCard,
  addCard,
} = require("./public/javascripts/game");
const { deck, shuffleCards } = require("./public/javascripts/deck");
const {
  getSetScore,
  checkIfSet,
  checkIfSetInBoard,
} = require("./public/javascripts/score");
const Game = require("./models/Game");
var app = express();

const http = require("http").createServer(app);
const io = require("socket.io")(http);

mongoose
  .set("useUnifiedTopology", true)
  .set("useFindAndModify", false)
  .connect(process.env.MONGODB_URI || "mongodb://localhost/emoji-game", {
    useNewUrlParser: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

io.on("connection", async (socket) => {
  console.log("New user is connected");
  socket.on("createGame", (data) => {
    //generate passcode
    let passcode = generatePasscode();
    //retrieve type : data.type
    let type = data.type;
    //generate a shuffled Deck
    let newDeck = shuffleCards(deck);
    // pick the 3 cards to board
    let board = addCard(newDeck, 12);
    //remove 3 card from deck
    newDeck = removeCard(newDeck, 12);
    //calculate the sets available on board
    let setsOnBoard = checkIfSetInBoard(board) || [];
    //console.log(setsInBoard);
    //if available, retrieve player id(for now socket id)
    let userId = data.socketId;
    //create a game with previous info
    socket.join(passcode);
    Game.create({
      passcode,
      type,
      deck: newDeck,
      board,
      setsOnBoard,
      player1: userId,
    })
      .then((newGame) => {
        console.log("New game created", newGame.deck.length);
        io.to(passcode).emit("newGame", { newGame });
      })
      .catch((err) => console.log(err));
    //send game to client
  });

  socket.on("clickedCard", async (data) => {
    try {
      const clickedCard = { player: data.player, cardId: data.cardId };
      let currentGame = await Game.findById(data.gameId);
      let found = await currentGame.selectedCards.filter((card) => {
        return (
          card.cardId == clickedCard.cardId && card.player == clickedCard.player
        );
      });

      if (found.length === 0 && currentGame.selectedCards.length < 3) {
        currentGame = await Game.findByIdAndUpdate(
          data.gameId,
          {
            $push: { selectedCards: clickedCard },
          },
          { new: true }
        );
      } else if (found.length !== 0) {
        currentGame = await Game.findByIdAndUpdate(
          data.gameId,
          {
            $pull: { selectedCards: clickedCard },
          },
          { new: true }
        );
      }
      let selectedCards = currentGame.selectedCards;

      io.emit("selectedCards", { selectedCards });
    } catch (err) {
      console.log(err);
    }
  });

  socket.on("add3cards", async (data) => {
    console.log(data.numOfCards, typeof data.gameId);
    let currentGame = await Game.findById(data.gameId);
    console.log(currentGame.deck.length);
    let newCards = await addCard(currentGame.deck, 3);
    let board = [...currentGame.board, ...newCards];
    let deck = await removeCard(currentGame.deck, 3);
    let updatedGame = await Game.findByIdAndUpdate(
      data.gameId,
      { board, deck },
      { new: true }
    );
    let setsOnBoard = checkIfSetInBoard(updatedGame.board);
    updatedGame = await Game.findByIdAndUpdate(
      data.gameId,
      { setsOnBoard },
      { new: true }
    );
    io.emit("added3cards", {
      board: updatedGame.board,
      deck: updatedGame.deck,
      setsOnBoard: updatedGame.setsOnBoard,
    });
  });
  socket.on("checkIfSet", async (data) => {
    let currentGame = await Game.findById(data.gameId);
    let selectId = currentGame.selectedCards.map((select) => select.cardId); // give the ids of the selectedCards
    let threeCards = currentGame.board.filter((card) =>
      selectId.includes(card.id)
    ); //give the cards that are selected
    let updatedGame;
    let message;

    if (checkIfSet(threeCards)) {
      updatedGame = await Game.findByIdAndUpdate(
        data.gameId,
        {
          $push: { foundSets: { player: socket.id, cardId: threeCards } },
          $pull: { board: { id: { $in: selectId } } },
        },
        { new: true }
      );
      let setsOnBoard = checkIfSetInBoard(updatedGame.board);
      updatedGame = await Game.findByIdAndUpdate(
        data.gameId,
        { setsOnBoard, selectedCards: [] },
        { new: true }
      );
      message = "This is a set";
    } else {
      updatedGame = await Game.findByIdAndUpdate(
        data.gameId,
        { selectedCards: [] },
        { new: true }
      );
      message = "This is not a set";
    }
    io.emit("setChecked", {
      updatedGame,
      message,
    });
  });
});

http.listen(4000, () => {
  console.log("listening on port 3000");
});

module.exports = app;
