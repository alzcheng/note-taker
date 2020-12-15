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

router.delete("/notes/:id", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    const allNotes = JSON.parse(data);
    const noteIndex = allNotes.findIndex((note) => note.id === req.params.id);
    //if (noteIndex === -1) return res.status(404).json({});
    allNotes.splice(noteIndex, 1);
    console.log(allNotes);
    fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) => {
      if (err) throw err;
      return res.json({ msg: "Delete successful" });
    });
  });
});

module.exports = router;
