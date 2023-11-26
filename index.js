const express = require('express')
const { contextMiddleware } = require('./src/middlewares/context.middleware')

const methods = [
  'get',
  'put',
  'post',
  'patch'
]

const defaultOptions = {
  preHandler: [],
  postHandler: [],
  schema: {
    query: {},
    body: {},
    params: {},
    response: {
      default: {},
      200: {}
    }
  },
  isAuthenticated: false,
  isBasicAuthenticated: false
}

/**
 * @this {import('express').Router}
 * @param {string} method
 * @returns {App.Handler}
 */
function methodHandler (method) {
  return function (path, options, handler) {
    options = Object.assign(defaultOptions, options)
    const middlewares = []

    if (options.isAuthenticated) {
      middlewares.push(isAuthenticated)
    }

    if (options.isBasicAuthenticated) {
      middlewares.push(basicAuthenticationMiddleware)
    }

    middlewares.push(contextMiddleware)
    middlewares.push(requestValidationMiddleware({ body: options.schema?.body, params: options.schema?.params, query: options.schema?.query }))
    middlewares.push(responseValidationMiddleware(options.schema?.response))

    if (Array.isArray(options.preHandler)) {
      middlewares.concat(options.preHandler)
    }

    this[method](
      path,
      ...middlewares,
      handler,
      ...(Array.isArray(options.postHandler) ? options.postHandler : [])
    )
  }
}

/**
 * @param {import('express').RouterOptions} options
 * @returns {import('express').Router}
 */
function Router (options) {
  const router = express.Router(options)
  methods.forEach(method => router[method] = methodHandler.call(router, method))
  return router
}

module.exports = { Router }
