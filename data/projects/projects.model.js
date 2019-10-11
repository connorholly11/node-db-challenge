const db = require("../../db.config");

module.exports = {
  getProjects,
  getProjectsId
};

function getProjects() {
  return db("projects");
}

function getProjectsId(id) {
  return db("projects").where("id", "=", id);
}
