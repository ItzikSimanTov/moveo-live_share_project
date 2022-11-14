// api root routes-file

const Router = require('express').Router()
// api-routes
const { userRouter } = require('./user')
const { codeblockRouter } = require('./codeblock')

// api routes

Router.use('/user', userRouter)
Router.use('/codeblock', codeblockRouter)

module.exports.apiRouter = Router