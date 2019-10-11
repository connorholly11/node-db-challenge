const db = require("../../db.config");

module.exports = {
  getProjects
};

function getProjects() {
  return db("projects");
}
