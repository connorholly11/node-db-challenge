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

router.post("/", (req, res) => {
  const project = req.body;

  db.addProject(project)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on adding project"
      });
    });
});

router.get("/:id/tasks", (req, res) => {
  const id = req.params.id;

  db.getTasks(id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on getting tasks"
      });
    });
});

router.post("/:id/tasks", (req, res) => {
  const id = req.params.id;
  const task = req.body;

  db.addTasks(task, id)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on adding tasks"
      });
    });
});

module.exports = router;
