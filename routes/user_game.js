const express = require("express");
const router = express.Router();
const c = require("../controllers");

router.post("/", c.user_game.createUser);
router.get("/", c.user_game.getAll);
router.get("/:id", c.user_game.getOne);
router.put("/:id", c.user_game.updateUser);
router.delete("/:id", c.user_game.deleteUser);

module.exports = router;
