const express = require("express");
const { list, detail, search } = require("../controllers/products.controller");
const router = express.Router();

router.get("/", list);
router.get("/search", search);
router.get("/:id", detail);

module.exports = router;
