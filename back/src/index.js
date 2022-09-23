const express = require("express");
const app = express();
const port = 4000;
const path = require("path");
const cors = require("cors");
const pokemonRouter = require("./routes/pokemon.routes");
app.use(express.static("static"));

app.use(
  cors({
    origin: ["http://localhost:3000", "*"],
  })
);

app.use(pokemonRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
