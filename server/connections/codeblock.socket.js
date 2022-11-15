// socket file for codeblock functinality

const jwt = require('jsonwebtoken')
// const { Server } = require('socket.io')
const { ObjectId } = require('mongoose').Types
const { Codeblock } = require('../models/codeblock')
// configs
// const SOCKET_PORT = process.env['SOCKET_PORT']
const JWT_SECRET_AUTH = process.env['JWT_SECRET_AUTH']
const JWT_SECRET_CODEBLOCK = process.env['JWT_SECRET_CODEBLOCK']

// const io = new Server(SOCKET_PORT, {
//     cors: {
//         origin: '*'
//     }
// })

// listen for connections

const listener = (...args) => {
    console.log({args})
}

/**
 * @desc listen for ws connections
 */
const connectionHandler = s => {

    console.log('connection')    
    s.on('modify', async args => {
        console.log('trying to modify')
        try {
            // get token from payload
            const auth_token = args.auth_token
            const codeblock_token = args.codeblock_token
            // token payload variables
    
            // validate socket args
            if (!auth_token || !codeblock_token) {
                // invalid payload - ignore current connection
                return s.off('modify', listener)
            }
    
            // validate tokens
            const user = jwt.verify(auth_token, JWT_SECRET_AUTH)
            const codeblock = jwt.verify(codeblock_token, JWT_SECRET_CODEBLOCK)
            
            // compare tokens data
            if (codeblock.user != user._id) {
                throw new Exception('Wrong user')
            }

            // -- connection is valid
    
            if (args.code) {
                console.log(`Changing code: ${args.code}`)
                // update db
                const result = await Codeblock.updateOne({_id: ObjectId(codeblock.codeblock_id)}, {code: args.code})
                // broadcast changes to student and mentor
                s.broadcast.emit('modified', args.code)
            }
        }
        catch (err) {
            console.log('An error has occured')
            s.off('modify', listener)
        }
    })
}

module.exports = { connectionHandler }