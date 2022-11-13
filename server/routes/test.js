// Router file [test] - testing functionallity
const router = require('express').Router()

/**
 * @desc route does tests.
 */
router.post('/test', (req, res) => {
    res.json({requestBody: req.body})
})

module.exports.testRouter = router