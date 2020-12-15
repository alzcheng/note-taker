const router = require("express").Router();
const path = require("path");
const fs = require("fs");

//Define route for index.html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Define route for notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//Define route to access index.js
router.get("/assets/js/index.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
});

//Define route to access style.css
router.get("/assets/css/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));
});

module.exports = router;
