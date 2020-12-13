const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("/assets/js/index", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
});

router.get("/assets/css/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));
});

module.exports = router;
