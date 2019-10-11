const express = require("express");
const projectsRouter = require("./data/projects/projects.router");
const resourcesRouter = require("./data/resources/resources.router");

const server = express();

server.use(express.json());
server.use("/projects", projectsRouter);
server.use("/resources", resourcesRouter);

module.exports = server;
