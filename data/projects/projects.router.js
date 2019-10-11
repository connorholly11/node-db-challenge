const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("im in the projects router");
});

module.exports = router;
