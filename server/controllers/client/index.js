// client:controllers file
const { resolve } = require('path')
const { renderFile } = require('ejs')
const { CodeblockTypes } = require('../../db/types/codeblock')

const getTemplatePath = filename => resolve('views', filename)

const redirectOnTokenExists = (req, res) => {
    // redirect if token exists
    if (req.cookies['x-auth-token']) {
        res.status(200).send('Already signed in').end()
        return true
    }
    return false
}

/**
 * @desc read ejs (sign-in) file 
 */
const signinController = async (req, res) => {
    const filename = getTemplatePath('Signin.page.ejs')
    // redirect if token exists
    if (redirectOnTokenExists(req, res)) return
    // return ejs file
    renderFile(filename, (err, data) => {
        if (err) {
            console.log({err})
            return res.status(500).end()
        }
        res.status(200).send(data).end()
    })
}

/**
 * @desc read ejs (sign-up) file 
 */
const signupController = async (req, res) => {
    const filename = getTemplatePath('Signup.page.ejs')
    // redirect if token exists
    if (redirectOnTokenExists(req, res)) return
    // return ejs file
    renderFile(filename, (err, data) => {
        if (err) {
            console.log({err})
            return res.status(500).end()
        }
        res.status(200).send(data).end()
    })
}

/**
 * @desc read ejs (lobby) file 
 */
const lobbyController = async (req, res) => {
    const filename = getTemplatePath('Lobby.page.ejs')
    const data = {
        categories: CodeblockTypes
    }
    // return ejs file
    renderFile(filename, data, (err, data) => {
        if (err) {
            console.log({err})
            return res.status(500).end()
        }
        res.status(200).send(data).end()
    })
}

module.exports = {signinController, signupController, lobbyController}