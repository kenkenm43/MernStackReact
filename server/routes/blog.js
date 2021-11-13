const express = require("express");
const router = express.Router();
const { create } = require("../controllers/blogController");

router.post("/create", create);
router.get("/blogs", getAllblogs);

module.exports = router;
