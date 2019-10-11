const express = require("express");
const db = require("./resources.model");

const router = express.Router();

router.get("/", (req, res) => {
  db.getResources()
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error getting resources"
      });
    });
});

router.post("/", (req, res) => {
  const resource = req.body;

  db.addResource(resource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error adding resources"
      });
    });
});

module.exports = router;
