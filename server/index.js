require('dotenv').config()  // -- initiate env file
const express = require('express')
const app = express()
// middlewares
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
// routes
const {userRouter} = require('./routes/user')
const {codeblockRouter} = require('./routes/codeblock')
// configs
const SERVER_PORT = process.env['SERVER_PORT']

// connect with mongodb
require('./db/connection')

// initiate socket
require('./connections/codeblock.socket')

// middlewares
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// routes
app.use('/user', userRouter)
app.use('/codeblock', codeblockRouter)

app.listen(SERVER_PORT, () => console.log(`Server is now working @ port ${SERVER_PORT}!`))