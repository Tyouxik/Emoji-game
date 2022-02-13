export default (socket) => {
  socket.emit("room:create", () => {
    // emit to server to create a room
  });

  socket.on("room:created", () => {
    // listen to server when room is created
    // should receive a passcode for the room
  });
};
