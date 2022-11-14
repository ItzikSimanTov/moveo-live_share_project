const router = require('express').Router()
const {Codeblock} = require('../../models/codeblock')
// utils
const {signCodeblockToken} = require('../../utils/jwt')
// middlewares
const {filterUserRoleMiddleware} = require('../../middlewares/filterUserRole')
// controllers
const {getCategories} = require('../../controllers/api/codeblock')

/**
 * @desc get codeblock categories.
 */
router.get('/categories', filterUserRoleMiddleware('mentor'), getCategories)

/**
 * @desc generate link with given parameters.
 */
router.post('/generate', async (req, res) => {
    // validate payload
    if (Object.keys(req.body).length !== 2)
        return res.status(400).send('Should contain codeblock-title & user-id').end()
    // create codeblock instance in db
    const result = await Codeblock.create({title: req.body.codeblock_title, code: ''})
    // generate token
    const token = signCodeblockToken({user: req.body.user, codeblock_id: result._id.toString()})
    // return to client
    return res.status(200).json({link: `http://localhost:5000/codeblock?student_login=${token}`}).end()
})

// http://localhost:5000/codeblock?student_login=token
// /**
//  * @desc return html
//  */
// router.get('/', )

// client.onKeyPressed => server {changedData: keyPressed} => server updates db with new text => spread changes across users


module.exports.codeblockRouter = router