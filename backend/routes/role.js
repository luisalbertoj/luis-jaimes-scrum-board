const express = require("express");
const router = express.Router();
const Role = require("../controllers/role");

router.post("/registerRole", Role.registerRole);

router.get("/listRole", Role.listRoles);

module.exports = router;