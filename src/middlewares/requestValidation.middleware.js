const Ajv = require('ajv');

/**
 * @param {App.Schema}
 * @returns {import('express').Handler}
 */
function requestValidationMiddleware ({ query, params, body }) {
  /** @type {import('ajv').SchemaCxt} */
  const compiledSchema = ajv.compile(query || params || body || {})

  return function (req, res, next) {
    if (!compiledSchema || !compiledSchema(req.query || req.params || req.body || {})) {
      next(compiledSchema.allErrors)
      return
    }

    next()
  }
}

module.exports = { requestValidationMiddleware }
