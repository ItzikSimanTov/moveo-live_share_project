const jwt = require('jsonwebtoken')

const signNewToken = ({_id, role}) => jwt.sign(
    JSON.stringify({_id, role}),
    '12345'
)

module.exports = {signNewToken}