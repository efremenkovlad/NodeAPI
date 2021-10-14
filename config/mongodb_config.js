const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const config = require("./index");

const procEnv = config.url;
const mongoDB = mongoose
  .connect(procEnv)
  .then(() => console.log("Database connection succesfully"))
  .catch((err) => console.log(err));

module.exports = mongoDB;
