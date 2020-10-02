const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  passcode: String,
  type: {
    type: String,
    enum: ["classicSolo", "allCardsSolo", "classicMulti", "allCardsMulti"],
  },
  deck: [Object],
  board: [Object],
  setsOnBoard: [[Object]],
  selectedCards: Array,
  foundSets: [{}],
  player1: { type: String, default: "Jet Set 1" },
  player2: { type: String, default: "Jet Set 2" },
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
