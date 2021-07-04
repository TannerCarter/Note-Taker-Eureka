const router = require("express").Router();
const fs = require("fs");
const { db } = require("../../db/db.json");

//include nanoid
const { nanoid } = require("nanoid");
// Use fs to pull notes from db.json
const savedNotes = fs.readFileSync("./db/db.json");
if (savedNotes) {
  let invalid = JSON.parse(savedNotes);
  notes = invalid;
} else {
  notes = [];
}

router.get("/notes", (req, res) => {
  return res.json(notes);
});
//Use nanoid to generate ids - Saved note to show in console -
router.post("/notes", function (req, res) {
  let validId = nanoid();

  let validNote = {
    id: validId,
    title: req.body.title,
    text: req.body.text,
  };
  console.log(validNote);
  notes.push(validNote);
  //Send validNote back
  res.json(validNote);
  fs.writeFileSync(
    "./db/db.json",
    JSON.stringify(notes, null, 2),
    function (err) {
      if (err) throw err;
    }
  );
});

//Delete note
router.delete("/notes/:id", (req, res) => {
  let deleteNote = notes.findIndex((item) => item.id === req.params.id);
  notes.splice(deleteNote, 1);

  //Write new
  fs.writeFileSync(
    "./db/db.json",
    JSON.stringify(notes, null, 2),
    function (err) {
      if (err) throw err;
    }
  );
  res.json({ deletion: "Your note has been succesfully deleted" });
});

module.exports = router;
