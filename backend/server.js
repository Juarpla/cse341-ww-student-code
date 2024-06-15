const express = require("express");
const app = express();
const env = require("dotenv").config();
const static = require("./src/routes/static");
const runMongo = require("./src/database");
const professionalRoute = require("./src/routes/professionalRoute");

runMongo().catch(console.error);

app.use(static);
app.use("/professional", professionalRoute);

const port = process.env.PORT;
const host = process.env.HOST;

app.listen(port, () => {
    console.log(`App listening on ${host}:${port}`);
})