const express = require("express");
const app = express();
const env = require("dotenv").config();
const static = require("./src/routes/static");
const mongodb = require("./src/database");
const professionalRoute = require("./src/routes/professionalRoute");

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Connected to MongoDB`)
  }
});

app.use(static);
app.use("/professional", professionalRoute);

const port = process.env.PORT || 8080;
const host = process.env.HOST;

app.listen(port, () => {
    console.log(`App listening on ${host}:${port}`);
})