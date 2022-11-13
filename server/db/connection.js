const mongoose = require('mongoose')
const url = "mongodb://127.0.0.1/moveo"

// connect to database
mongoose.connect(url)
    .then(res => console.log('Database successfully loaded'))