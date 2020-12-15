const router = require("express").Router();
const fs = require("fs");
const uniqid = require("uniqid");

// Gets all of the notes stored in the db.json structure
router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    return res.json(JSON.parse(data));
  });
});

// Adds a new note into the db.json and returns the new note to the client
router.post("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    const oldNotes = JSON.parse(data);
    const newNote = req.body;

    //Set the new ID
    newNote.id = uniqid();
    oldNotes.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(oldNotes), (err) => {
      if (err) throw err;
    });

    return res.json(newNote);
  });
});

// Uses the parameter ID in the url and deletes the note with
// that unique id in the db.json
router.delete("/notes/:id", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    const allNotes = JSON.parse(data);
    const noteIndex = allNotes.findIndex((note) => note.id === req.params.id);

    //If you can't find the note index, return an error
    if (noteIndex === -1) return res.status(404).json({});

    //Deletes the note in all of the notes
    allNotes.splice(noteIndex, 1);

    fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) => {
      if (err) throw err;
      return res.json({ msg: "Delete successful" });
    });
  });
});

module.exports = router;
