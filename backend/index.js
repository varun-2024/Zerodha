// Express
const express = require("express");
const app = express();
// Mongoose
const mongoose = require("mongoose");
//Dotenv
require("dotenv").config();
//CORS
const cors = require("cors");
// PORT & Data Base URL
const port = process.env.PORT || 3000;
const dbURL = process.env.MONGO_URL;

//Temporary Data Insertion
const { PositionsModel } = require("./model/PositionsModel");

// MongoDB Connection
main()
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.error("Error Connecting to Database!!!", err);
    process.exit(1); // Exit process on connection failure
  });
// Connection Options added
async function main() {
  try {
    await mongoose.connect(dbURL, { serverSelectionTimeoutMS: 5000 }); // Close sockets after 45s of inactivity
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error; // Error for Connection failure
  }
}

// Handle connection events for ongoing monitoring
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from MongoDB");
});

// Routes
app.get("/", async (req, res) => {
  res.send("Hello World!");
});
// Server Listening
app.listen(port, () => {
  console.log("Server is Listening on Port: ", port);
});
