/** @type {import('express').Handler} */
function contextMiddleware (req, res, next) {
  const context = {}
  context.reqTimeStamp = Date.now()
  context.traceId = uuid()
  context.logger = Logger

  req.context = context

  next()
}

module.exports = { contextMiddleware }
