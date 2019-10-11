const express = require("express");
const projectsRouter = require("./data/projects/projects.router");

const server = express();

server.use(express.json());
server.use("/projects", projectsRouter);

module.exports = server;
