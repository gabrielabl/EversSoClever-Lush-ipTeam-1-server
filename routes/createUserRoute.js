const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

module.exports = router;