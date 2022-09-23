const express = require("express");
const pokemonController = require("./../controllers/pokemon.controller");
const router = express.Router();

router.get("/pokemons", pokemonController.index);

module.exports = router;
