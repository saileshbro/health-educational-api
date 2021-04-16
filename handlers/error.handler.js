exports.catchErrors = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(err => {
      return next(err)
    })
  }
}
exports.notFoundError = (req, res) => {
  return res.status(404).json({
    error: 'Route not found',
  })
}
exports.developmentErrors = (err, req, res, next) => {
  const { message: error, status } = err
  const errorDetails = {
    error,
    status,
    stack: err.stack || '',
  }
  return res.status(status || 500).json(errorDetails)
}
