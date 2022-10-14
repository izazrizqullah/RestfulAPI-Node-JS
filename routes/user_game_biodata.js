const express = require("express");
const router = express.Router();
const c = require("../controllers");
const midd = require("../helper/middleware");

router.post("/", midd.mustLogin, c.user_game_biodata.createBio);
router.get("/", midd.mustLogin, c.user_game_biodata.getAll);
router.get("/:id", midd.mustLogin, c.user_game_biodata.getOne);
router.put("/:id", midd.mustLogin, c.user_game_biodata.updateBio);
router.delete("/:id", midd.mustLogin, c.user_game_biodata.deleteBio);

module.exports = router;
