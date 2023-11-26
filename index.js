const express = require('express')
const methods = require('methods')

const methods = [
  'get',
  'put',
  'post',
  'patch',
  'post'
]

function Handler (method) {
  return function (route, options, handler) {
    Handler.prototype[method](route)
  }
}

function Router () {
  const router = express.Router()
  // methods.forEach(method => {
  //   const expressMethod = router.
  // })
}


/**
 * @param {Array} methodsToOverride default values are ['get', 'put', 'post', 'patch', 'delete']
 * @returns {import('express').Handler}
 */
function fastifyLikeExpressRouter(methodsToOverride = ['get', 'put', 'post', 'patch', 'delete']) {
  return function (req, res, next) {
    next()
  }
}

const r = Router()
