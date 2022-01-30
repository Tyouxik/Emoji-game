import mongoose from "mongoose";

export const createDbClient = () => {
  mongoose
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
};
