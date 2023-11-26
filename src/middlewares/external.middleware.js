class ExternalMiddleware {
  /** @type {import('express').Handler} */
  static isAuthenticated (req, res, next) {
    next()
  }

  /** @type {import('express').Handler} */
  static isBasicAuthenticated (req, res, next) {
    next()
  }

  /** @type {import('express').Handler} */
  static requestValidationMiddleware (req, res, next) {
    next()
  }

  /** @type {import('express').Handler} */
  static responseValidationMiddleware (req, res, next) {
    next()
  }
}

module.exports = { ExternalMiddleware }
