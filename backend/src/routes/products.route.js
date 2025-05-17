const express = require("express");
const { list, detail } = require("../controllers/products.controller");
const router = express.Router();

router.get("/", list);
router.get("/detail", detail);

module.exports = router;
