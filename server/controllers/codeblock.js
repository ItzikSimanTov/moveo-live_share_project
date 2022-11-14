// codeblock:controllers file
const {Codeblock} = require('../models/codeblock')
const {CodeblockTypes} = require('../db/types/codeblock')

/**
 * @desc return all codeblock categories.
 */
const getCategories = async (req, res) => {
    return res.status(200).json(CodeblockTypes).end()
}

/**
 * @desc allows the student and the mentor to join a shared codeblock page.
 */
const joinCodeblock = async (req, res) => {
    // get token from url
    // allocate a new socket
}


module.exports = {getCategories}