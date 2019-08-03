const express = require("express");
// const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3306;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes
app.use(routes)

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});