const db = require("./db/models")
const express = require("express");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes
app.use(routes)

// Starts the server to begin listening and sync sequelize models
// =============================================================
db.sequelize.sync().then(() => {
  app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
  });
})