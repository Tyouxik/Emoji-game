const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    passcode: String,
    type: {
      type: String,
      enum: ["classicSolo", "allCardsSolo", "classicMulti", "allCardsMulti"],
    },
    deck: [Object],
    board: [Object],
    setsOnBoard: [[Object]],
    selectedCards: [Object],
    foundSets: [Object],
  },
  { timestamps: { createdAt: "created_at" } }
);

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
