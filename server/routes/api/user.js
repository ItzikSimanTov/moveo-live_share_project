// Users router - user functinallity
const router = require('express').Router()
// middlewares
const { authUserMiddleware } = require('../../middlewares/authUser')
// controllers
const { signUpController, signInController, getUserData, getUsersListController } = require('../../controllers/api/user')

/**
 * @desc get user data.
 */
router.get('/', authUserMiddleware, getUserData)

/**
 * @desc route handles sign-up requests.
 */
router.post('/sign-up', signUpController)

/**
 * @desc route handles sing-in requests.
 */
router.post('/sign-in', signInController)

/**
 * @desc route for hettint a users list, given a name query.
 */
router.get('/list/:name', getUsersListController)

// export router 
module.exports.userRouter = router