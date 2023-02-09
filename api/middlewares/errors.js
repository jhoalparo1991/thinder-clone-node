const debug = require("debug")("Errors");

function logErrors(err, req, res, next) {
  debug({
    stack: err.stack,
  });
  next(err.message);
}

function errorHandle(err, req, res, next) {
  if (err) {
    debug({
      stack: err.stack,
    });

    return res.status(400).json({
      error: err.message,
    });
  } else {
    next();
  }
}

module.exports = {
  errorHandle,
  logErrors,
};
