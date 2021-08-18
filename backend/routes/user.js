const express = require("express");
const router = express.Router();
const User = require("../controllers/user");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");

router.post("/registerUser", User.registerUser);
router.get("/listUser/:name?", Auth, ValidateUser, User.listUser);

module.exports = router;
