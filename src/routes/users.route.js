const express = require("express");
const { list } = require("../controllers/user.controller");
const router = express.Router();

router.get("/", list);
// router.get("/");

module.exports = router;
