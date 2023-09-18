// Import express (it needs to be installed first)
const express = require("express");

// Create an express server object
const server = express();

// Define a request handler
const homepageHandler = (req, res) => {
  res.sendFile(__dirname + "/index.html"); // Send back an HTML file
};

// Register that handler to GET requests at the "/" URL
server.get("/", homepageHandler);

// And start the server on port 8080 of localhost (the computer running the program)
const port = 8080;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});