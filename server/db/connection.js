const mongoose = require('mongoose')
// configs
const URL = process.env['DATABASE_URL']

// connect to database
mongoose.connect(URL)
    .then(res => console.log('Database successfully loaded'))