// api root routes-file

const Router = require('express').Router()
// controllers
const { loginController } = require('../../controllers/client')


// client routes

/**
 * @desc client login page route.
 */
Router.get('/login', loginController)


module.exports.clientRouter = Router