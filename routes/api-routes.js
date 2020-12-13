const router = require("express").Router();
const fs = require("fs");
const uniqid = require("uniqid");

router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    return res.json(JSON.parse(data));
  });
});

router.post("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    const oldNotes = JSON.parse(data);
    const newNote = req.body;
    newNote.id = uniqid();
    console.log(oldNotes);
    console.log(newNote);
    oldNotes.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(oldNotes), (err) => {
      if (err) throw err;
    });
    return res.json(newNote);
  });
});

module.exports = router;
