function errLog(err) {
  console.error(err);
}

function returnErr(err, req, res, next) {
  res.status(err.statusCode || 500).send(err.message);
}

module.exports = { errLog, returnErr };
