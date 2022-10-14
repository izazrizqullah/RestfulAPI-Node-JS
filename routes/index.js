const express = require("express");
const router = express.Router();
const user_game = require("./user_game");
const auth = require("./auth");
const user_game_biodata = require("./user_game_biodata");
const user_game_history = require("./user_game_history");

router.use("/usergame", user_game);
router.use("/bio", user_game_biodata);
router.use("/history", user_game_history);
router.use("/auth", auth);

module.exports = router;
