const mongoDB = require("./config/mongodb_config");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const { returnErr } = require("./utils/errHandle");
const config = require("./config/index");

const task = require("./routes/task.route");
const user = require("./routes/user.route");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/tasks", task);
app.use("/users", user);

app.use(returnErr);

let port = config.port;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
