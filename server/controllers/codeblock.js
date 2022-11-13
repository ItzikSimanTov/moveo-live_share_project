// codeblock:controllers file
const {Codeblock} = require('../models/codeblock')
const {CodeblockTypes} = require('../db/types/codeblock')


const getCategories = async (req, res) => {
    return res.status(200).json(CodeblockTypes).end()
}


module.exports = {getCategories}