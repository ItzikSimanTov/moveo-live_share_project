const jwt = require('jsonwebtoken')
const {User} = require('../models/user')

/**
 * @desc Middleware - authenticates the user before accessing vital routes.
 */
const authUserMiddleware = async (req, res, next) => {
    const token = req.cookies?.['x-auth-token']
    if (!token) return res.status(401).send('Unauthorized').end()

    jwt.verify(token, '12345', async (err, data) => {
        // validate token
        if (err) {
            return res.status(403).send('Accedd denied').end()
        }
        // find user inside token
        const user = await User.findById(data._id)
        if (user) {
            // -- user found
            req['user'] = user
            next()
        }
        else return res.status(400).send('User not found').end()
    })
}


module.exports = {authUserMiddleware}