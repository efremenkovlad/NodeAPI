const dotenv = require("dotenv");

dotenv.config();

const { PORT, MONGODB_URL } = process.env;

const config = {
  port: Number(PORT),
  url: MONGODB_URL,
};

module.exports = config;
