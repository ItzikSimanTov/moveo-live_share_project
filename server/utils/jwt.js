const jwt = require('jsonwebtoken')
const {v4: uuidv4} = require('uuid')
// configs
const AUTH_SECRET = process.env['JWT_SECRET_AUTH']
const CODEBLOCK_SECRET = process.env['JWT_SECRET_CODEBLOCK']
const DAY = '1d'

/**
 * @desc sign new auth-token for the user.
 */
const signNewToken = ({_id, role}) => jwt.sign(
    JSON.stringify({_id, role}),
    AUTH_SECRET,
    // {expiresIn: DAY}
)

/**
 * @desc sign new codeblock-token.
 */
const signCodeblockToken = ({user, codeblock_id}) => jwt.sign(
    JSON.stringify({user, codeblock_id, uuid: uuidv4()}), 
    CODEBLOCK_SECRET,
    // {expiresIn: DAY}
)

module.exports = {signNewToken, signCodeblockToken}