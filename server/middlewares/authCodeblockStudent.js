const jwt = require('jsonwebtoken')
const {User} = require('../models/user')
// configs
const JWT_SECRET_AUTH = process.env['JWT_SECRET_AUTH']
const JWT_SECRET_CODEBLOCK = process.env['JWT_SECRET_CODEBLOCK']

/**
 * @desc Middleware - authenticates the user before accessing vital routes.
 * @param role The expected role to access certain functionality in the program.
 */
const authCodeblockStudent = async (req, res, next) => {
    try {
        // auth-token | codeblock-token
        const auth_token = req.cookies?.['x-auth-token']
        const codeblock_token = req.query['student_login']
        if (!auth_token || !codeblock_token) return res.status(401).send('Unauthorized').end()
    
        // validate token
        const user = jwt.verify(auth_token, JWT_SECRET_AUTH)
        const codeblock = jwt.verify(codeblock_token, JWT_SECRET_CODEBLOCK)

        // find user inside token
        const result = await User.findById(user._id)
        if (!result) {
            return res.status(400).send('User does not exist').end()
        }

        // pass required information to the next controller
        req['codeblock'] = codeblock

        // user is mentor, no auth needed
        if (user.role == 'mentor') {
            req['isMentor'] = true
            return next()
        }

        // compare tokens data
        if (codeblock.user != user._id.toString()) {
            return res.status(403).send('Wrong user').end()
        }

        // -- student is verified - pass information
        next()
        
    }
    catch (err) {
        // token is invalid or expired
        console.log({err})
        return res.status(403).send('Access denied').end()
    }

}

module.exports = {authCodeblockStudent}