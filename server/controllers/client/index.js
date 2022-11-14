// client:controllers file
const { resolve } = require('path')
const { renderFile } = require('ejs')

const getTemplatePath = filename => resolve('templates', filename)

/**
 * @desc read ejs (login) file 
 */
const loginController = async (req, res) => {
    const filename = getTemplatePath('Login.page.ejs')
    console.log({filename})
    renderFile(filename, (err, data) => {
        if (err) {
            console.log({err})
            return res.status(500).end()
        }
        console.log({data})
        res.status(200).send(data).end()
    })
}

module.exports = {loginController}