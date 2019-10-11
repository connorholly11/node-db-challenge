const db = require("../../db.config");

module.exports = {
  getProjects,
  getProjectsId,
  addProject,
  getTasks,
  addTasks
};

function getProjects() {
  return db("project");
}

function getProjectsId(id) {
  return db("project").where("id", "=", id);
}

function addProject(project) {
  return db("project").insert(project);
}

function getTasks(project_id) {
  return db("task")
    .join("project", "task.project_id", "=", "project.id")
    .select("project.*", "task.*")
    .where("project_id", "=", project_id);
}

function addTasks(task, project_id) {
  return db("task")
    .join("project", "task.project_id", "=", "project.id")
    .insert(task)
    .where("project_id", "=", project_id);
}
