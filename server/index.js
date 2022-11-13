const express = require('express')
const app = express()
// middlewares
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
// routes
const {userRouter} = require('./routes/user')
const {codeblockRouter} = require('./routes/codeblock')

// connect with mongodb
require('./db/connection')

// middlewares
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// routes
app.use('/user', userRouter)
app.use('/codeblock', codeblockRouter)

app.listen(5000)