/**
 * @param {import('express').Handler} fn
 * @returns {import('express').Handler}
 */
function wrap (fn) {
  return async function (req, res, next) {
    try {
      await fn(req, res, next)
      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = {
  wrap
}
