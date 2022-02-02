import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import { createDbClient } from "./clients/dbClient.js";
import { createServer } from "http";
import Server from "socket.io";
import { fileURLToPath } from "url";

import { createRoomHandlers, createGameHandlers } from "./socketIoHandlers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

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
  createRoomHandlers(io, socket);
  createGameHandlers(io, socket);
});

httpServer.listen(4000, () => {
  console.log("listening on port 4000");
});
