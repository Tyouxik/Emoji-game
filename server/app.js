import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { createDbClient } from "./clients/dbClient.js";
import dotenv from "dotenv";
import { createServer } from "http";
import Server from "socket.io";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

import {
  generatePasscode,
  removeCard,
  addCard,
} from "./public/javascripts/game.js";
import { deck, shuffleCards } from "./public/javascripts/deck.js";
import {
  getSetScore,
  checkIfSet,
  checkIfSetInBoard,
} from "./public/javascripts/score.js";
import { Game } from "./models/Game.js";

export let app = express();

const httpServer = createServer();
const io = new Server(httpServer);

const db = createDbClient();

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
  socket.on("createGame", async (data) => {
    //generate passcode
    let passcode = generatePasscode();
    //retrieve type : data.type
    let type = data.type;
    //generate a shuffled Deck
    let newDeck = shuffleCards(deck);
    // pick the 3 cards to board
    let board = addCard(newDeck, 12);
    //calculate the sets available on board
    let setsOnBoard = checkIfSetInBoard(board) || [];
    //console.log(setsInBoard);
    //if available, retrieve player id(for now socket id)
    let userId = data.socketId;
    //create a game with previous info
    socket.join(passcode);
    let newGame;
    if (data.type.toLowerCase().includes("classic")) {
      //remove 3 card from deck
      newDeck = removeCard(newDeck, 12);
      newGame = await Game.create({
        passcode,
        type,
        deck: newDeck,
        board,
        setsOnBoard,
        player1: userId,
      });
    } else if (data.type.toLowerCase().includes("allcards")) {
      newGame = await Game.create({
        passcode,
        type,
        board: newDeck,
        setsOnBoard,
        player1: userId,
      });
    }
    io.to(passcode).emit("newGame", { newGame });
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

httpServer.listen(4000, () => {
  console.log("listening on port 4000");
});