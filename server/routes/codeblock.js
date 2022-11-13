const router = require('express').Router()
// middlewares
const {filterUserRoleMiddleware} = require('../middlewares/filterUserRole')
// controllers
const {getCategories} = require('../controllers/codeblock')


/**
 * @desc get codeblock categories.
 */
router.get('/categories', filterUserRoleMiddleware('mentor'), getCategories)

/**
 * @desc generate link with given parameters.
 */
router.post('/generate', async (req, res) => {

})

module.exports.codeblockRouter = router