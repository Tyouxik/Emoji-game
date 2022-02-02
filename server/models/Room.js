import mongoose from "mongoose";
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  passcode: String,
});

export const Room = mongoose.model("Room", gameSchema);
