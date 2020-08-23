const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

//--routers
const usersRouter = require("../users/users-router.js");
const authRouter = require("../auth/auth-router.js");
const protected = require("../auth/auth-middleware.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/users", protected, usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.send({ api: "started" });
});

module.exports = server;