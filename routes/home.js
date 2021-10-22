const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.render("pages/index");
});

router.get("/blog", (req, res) => {
  return res.render("pages/blog");
});

router.get("/blog-detail", (req, res) => {
  return res.render("pages/blog-detail");
});

module.exports = router;
