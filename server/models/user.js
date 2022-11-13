const mongoose = require('mongoose')
const {UserRoleTypes} = require('../db/types/user')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: UserRoleTypes,
        default: 'student'
    }
})

module.exports.User = mongoose.model('User', UserSchema)