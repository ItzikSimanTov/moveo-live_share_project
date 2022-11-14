// testing socket functionallity (before implementing a whole client)

const {io} = require('socket.io-client')
const SOCKET_URL = 'ws://localhost:3000'

const socket = io(SOCKET_URL)

socket.emit('modify', {
    auth_token: "eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MzcwZGQ5MzQ0YWFjODM5MjQwYzg0YzkiLCJyb2xlIjoibWVudG9yIn0.YFv-R0M8dqS4WdNvRdpWu9MORG603Uy5YNWZdzTbhAE",
    codeblock_token: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiNjM3MGRkOTM0NGFhYzgzOTI0MGM4NGM5IiwiY29kZWJsb2NrX2lkIjoiNjM3MjU3MzUxMzBhYzdiMTMzZDBlOTZjIiwidXVpZCI6IjQzNDY2MzQzLTNhMGItNGRhNC1iNjBlLTllYjc3NTgyNjFhYyJ9.wxwnh8yOmSx8ngU2GeKiiTQZG3LoT1BoMSfGXhtGBBk",
    code: "New code yeaa"
})
