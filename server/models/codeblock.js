const mongoose = require('mongoose')
const {CodeblockTypes} = require('../db/types/codeblock')

const CodeblockSchema = new mongoose.Schema({
    title: {
        type: String,
        enum: CodeblockTypes
    },
    code: {
        type: String
    }
})

module.exports.Codeblock = mongoose.model('Codeblock', CodeblockSchema)