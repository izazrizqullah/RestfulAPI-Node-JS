const express = require("express");
const router = express.Router();
const c = require("../controllers");

router.post("/login", c.auth.login);

module.exports = router;
