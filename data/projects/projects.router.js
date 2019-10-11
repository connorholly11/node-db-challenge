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

//NOT WORKING
router.get("/tasks", (req, res) => {
  console.log("im getting all tasks");
  db.getAllTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on getting all tasks"
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

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db.updateProject(changes, id)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on updating projects"
      });
    });
});

//NOT WORKING
router.put("/:id/tasks", (req, res) => {
  const changes = req.body;
  const id = req.params.id;

  db.updateTask(changes, id)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on updating tasks"
      });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.deleteProject(id)
    .then(deleted => {
      res.status(204).json(deleted);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on deleting project"
      });
    });
});

//NOT WORKING
router.delete("/:id/tasks", (req, res) => {});

module.exports = router;
