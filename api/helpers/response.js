function success(req, res, message, status) {
  return res.status(status).json({
    message,
  });
}

function error(req, res, error, status) {
  return res.status(status).json({
    err: error,
  });
}

module.exports = {
  success,
  error,
};
