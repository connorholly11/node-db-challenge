const db = require("../../db.config");

module.exports = {
  getResources,
  addResource
};

function getResources() {
  return db("resource");
}

function addResource(resource) {
  return db("resource").insert(resource);
}
