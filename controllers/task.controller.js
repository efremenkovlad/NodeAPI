const Task = require("../models/task.model");

exports.get_all = async function getAll(req, res, next) {
  try {
    const data = await Task.find({});
    res.send(
      data.map(({ _id, task, isCompleted }) => ({ id: _id, task, isCompleted }))
    );
  } catch (err) {
    next(err);
  }
};

exports.task_add = async function (req, res, next) {
  try {
    const tasks = new Task({
      task: req.body.task,
      isCompleted: req.body.isCompleted,
    });
    const data = await tasks.save();
    const { _id: id, task, isCompleted } = data;
    res.send({ id1, task, isCompleted });
  } catch (err) {
    next(err);
  }
};

exports.task_update = async function (req, res, next) {
  try {
    const [err, data] = await Task.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
      .then((data) => [null, data])
      .catch((err) => [err, null]);
    if (err) {
      console.log("err");
      res.status(400).send("Task not found");
    } else data.isCompleted = !data.isCompleted;
    await data.save();
    const { _id: id, task, isCompleted } = data;
    res.send({ id, task, isCompleted });
  } catch (err) {
    next(err);
  }
};

exports.task_delete = async function (req, res, next) {
  try {
    result = await Task.deleteMany({ _id: req.body.listId });
    res.send(result);
  } catch (err) {
    next(err);
  }
};

exports.task_get = async function (req, res, next) {
  try {
    const data = await Task.findById(req.params.id);
    const { _id: id, task, isCompleted } = data;
    res.send({ id, task, isCompleted });
  } catch (err) {
    next(err);
  }
};

exports.task_update_all = async function (req, res, next) {
  try {
    const list = await Task.find({ isCompleted: false }).exec();
    if (list.length) {
      const res = await Task.updateMany(
        {},
        { $set: { isCompleted: true } }
      ).exec();
    } else {
      const res = await Task.updateMany(
        {},
        { $set: { isCompleted: false } }
      ).exec();
    }

    const [err, data] = await Task.find({})
      .then((data) => [null, data])
      .catch((err) => [err]);
    res.send(
      data.map(({ _id, task, isCompleted }) => ({ id: _id, task, isCompleted }))
    );
  } catch (err) {
    next(err);
  }
};
