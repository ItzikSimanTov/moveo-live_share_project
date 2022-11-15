const router = require('express').Router()
// middlewares
const {filterUserRoleMiddleware} = require('../../middlewares/filterUserRole')
// controllers
const {getCategories, generateRoomController} = require('../../controllers/api/codeblock')

/**
 * @desc get codeblock categories.
 */
router.get('/categories', filterUserRoleMiddleware('mentor'), getCategories)

/**
 * @desc generate link with given parameters.
 */
router.post('/generate', filterUserRoleMiddleware('mentor'), generateRoomController)

module.exports.codeblockRouter = router