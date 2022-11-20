// codeblock:controllers file
const {Codeblock} = require('../../models/codeblock')
const {CodeblockTypes} = require('../../db/types/codeblock')
// utils
const {signCodeblockToken} = require('../../utils/jwt')

/**
 * @desc return all codeblock categories.
 */
const getCategories = async (req, res) => {
    return res.status(200).json(CodeblockTypes).end()
}

/**
 * @desc allows the student and the mentor to join a shared codeblock page.
 */
const generateRoomController = async (req, res) => {
    // validate payload
    console.log({body: req.body})
    if (Object.keys(req.body).length !== 3)
        return res.status(400).send('Wrong parameters').end()
    // create codeblock instance in db
    const result = await Codeblock.create({title: req.body.codeblock_title, code: ''})
    // generate token
    const token = signCodeblockToken({user: req.body.user_id, codeblock_id: result._id.toString()})
    // return to client
    // return res.status(200).json({link: `http://localhost:5000/codeblock?student_login=${token}`}).end()
    return res.status(200).redirect(`../../codeblock?student_login=${token}`)
}

module.exports = {getCategories, generateRoomController}