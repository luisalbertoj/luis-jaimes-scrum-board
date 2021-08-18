const express = require("express");
const router = express.Router();
const board = require("../controllers/board");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");

router.post("/saveTask", Auth, ValidateUser ,board.saveTask);

module.exports = router;