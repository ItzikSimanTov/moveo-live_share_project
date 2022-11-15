const jwt = require('jsonwebtoken')
const {User} = require('../models/user')
// configs
const JWT_SECRET_AUTH = process.env['JWT_SECRET_AUTH']

/**
 * @desc Middleware - authenticates the user before accessing vital routes.
 * @param role The expected role to access certain functionality in the program.
 */
const filterUserRoleMiddleware = role => async (req, res, next) => {
    const token = req.cookies?.['x-auth-token']
    if (!token) return res.status(401).send('Unauthorized').end()

    jwt.verify(token, JWT_SECRET_AUTH, async (err, data) => {
        // validate token
        if (err) {
            return res.status(403).send('Access denied').end()
        }
        // find user inside token
        const user = await User.findById(data._id)
        if (user) {
            // -- user found
            console.log('role', role, data.role)
            if (role && role !== data.role) {
                return res.status(403).send('Wrong user').end()
            }
            req['user'] = user
            next()
        }
        else return res.status(400).send('User not found').end()
    })
}

module.exports = {filterUserRoleMiddleware}