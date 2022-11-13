// user:controllers file
const bcrypt = require('bcrypt')
const {User} = require('../models/user')
const {signNewToken} = require('../utils/jwt')

/**
 * @desc controller for user:sign-up
 */
const signUpController = async (req, res) => {
    try{
        if (!Object.keys(req.body).length) return res.status(422).send('Body is required').end()
        const hashedpassword = await bcrypt.hash(req.body.password, 10)
        // create user in db
        const user = await new User({
            name: req.body.name, 
            password: hashedpassword,
            email: req.body.email
        }).save()
        // create & return token
        const token = signNewToken({email: user.email, password: user.password, _id: user._id.toString()})
        res.status(201).json({token}).end()
    }
    catch(err) {
        console.log(err)
        res.status(500).send().end()
    }
}

/**
 * @desc controller for user:sign-in
 */
const signInController = async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email})
        if (!user) {
            return res.status(400).send('cannot find the user')
        }
        if(await bcrypt.compare(req.body.password, user.password)) {
            // create & return token
            const token = signNewToken({email: user.email, password: user.password, _id: user._id.toString()})
            res.status(200).json({token}).end()
        }
        else {
            res.status(403).send('not allowed').end()
        }
    }catch{
     res.status(500).send()
    }
}

/**
 * @desc controller for user:get-user-data
 */
const getUserData = async (req, res) => {
    return res.status(200).json({user: req.user}).end()
}


module.exports = {signUpController, signInController, getUserData}