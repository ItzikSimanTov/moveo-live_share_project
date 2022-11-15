// api root routes-file

const Router = require('express').Router()
// middlewares
const {filterUserRoleMiddleware} = require('../../middlewares/filterUserRole')
const {authCodeblockStudent} = require('../../middlewares/authCodeblockStudent')
// controllers
const { signinController, signupController, lobbyController, codeblockController } = require('../../controllers/client')

// client routes

/**
 * @desc client sign-in page route.
 */
Router.get('/sign-in', signinController)

/**
 * @desc client sign-up page route.
 */
Router.get('/sign-up', signupController)

/**
 * @desc client lobby page route.
 */
Router.get('/lobby', filterUserRoleMiddleware('mentor'), lobbyController)

/**
 * @desc client lobby page route.
 */
Router.get('/codeblock', authCodeblockStudent, codeblockController)

module.exports.clientRouter = Router