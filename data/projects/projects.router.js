const express = require("express");
const db = require("./projects.model");

const router = express.Router();

router.get("/", (req, res) => {
  db.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on getting projects"
      });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.getProjectsId(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on getting project ID"
      });
    });
});

module.exports = router;
