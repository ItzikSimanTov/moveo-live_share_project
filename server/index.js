require('dotenv').config()  // -- initiate env file
const express = require('express')
const app = express()
const { connectionHandler } = require('./connections/codeblock.socket')
// middlewares
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
// routes
const { apiRouter } = require('./routes/api')
const { clientRouter } = require('./routes/client')
// create http server & wrap socket
const server = require('http').createServer(app)
const { Server } = require('socket.io')
// configs
const SERVER_PORT = process.env['SERVER_PORT']

// create listening socket server
const io = new Server(server)

// socket connection handler
io.on('connection', connectionHandler)

// connect with mongodb
require('./db/connection')

// middlewares
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// routes
app.use('/', clientRouter)
app.use('/api', apiRouter)

server.listen(SERVER_PORT, () => console.log(`Server is now working @ port ${SERVER_PORT}!`))