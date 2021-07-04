const router = require("express").Router();
const fs = require("fs");

const notes = require("./notes");

router.use(notes);

module.exports = router;
