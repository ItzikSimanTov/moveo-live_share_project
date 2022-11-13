const jwt = require('jsonwebtoken')

const signNewToken = ({email, password, _id}) => jwt.sign(
    JSON.stringify({email, password, _id}),
    '12345'
)

module.exports = {signNewToken}