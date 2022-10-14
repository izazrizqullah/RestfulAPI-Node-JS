const express = require("express");
const router = express.Router();
const c = require("../controllers");
const midd = require("../helper/middleware");

router.post("/", midd.mustLogin, c.user_game_history.createHistory);
router.get("/", midd.mustLogin, c.user_game_history.getAll);
router.get("/:id", midd.mustLogin, c.user_game_history.getOne);
router.put("/:id", midd.mustLogin, c.user_game_history.updateHistory);
router.delete("/:id", midd.mustLogin, c.user_game_history.deleteHistory);

module.exports = router;
