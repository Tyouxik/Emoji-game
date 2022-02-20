import { io } from "socket.io-client";
import handleRoom from "./roomSockets";
import handleGame from "./gameSockets";
const socket = io();

export function connect() {
  socket.on("connect", () => {
    console.log("Socket " + socket.id + " is connected");
  });
}

export function disconnect() {
  socket.on("disconnect", () => {
    console.log("Socket " + socket.id + " is connected");
  });
}

handleRoom(socket);
handleGame(socket);
