const db = require("../../db.config");

module.exports = {
  getProjects,
  getProjectsId,
  getTasks,
  addProject,
  getAllTasks,
  addTasks,
  updateProject,
  updateTask,
  deleteTask,
  deleteProject
};

function getProjects() {
  return db("project");
}

function getProjectsId(id) {
  return db("project").where("id", "=", id);
}

function getTasks(project_id) {
  return db("task")
    .join("project", "task.project_id", "=", "project.id")
    .select("project.*", "task.*")
    .where("project_id", "=", project_id);
}

//NOT WORKING
function getAllTasks() {
  console.log("all tasks is getting called");
  console.log(db("task"));
  return db("task");
}

function addProject(project) {
  return db("project").insert(project);
}

function addTasks(task, project_id) {
  return db("task")
    .join("project", "task.project_id", "=", "project.id")
    .insert(task)
    .where("project_id", "=", project_id);
}

function updateProject(changes, project_id) {
  return db("project")
    .update(changes)
    .where("id", "=", project_id);
}

//NOT WORKING
function updateTask(changes, project_id) {
  return db("task")
    .update(changes)
    .where("id", "=", project_id);
}

function deleteProject(project_id) {
  return db("project")
    .del()
    .where("id", "=", project_id);
}

function deleteTask(project_id) {}
