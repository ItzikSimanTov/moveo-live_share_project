// testing socket functionallity (before implementing a whole client)

const {io} = require('socket.io-client')
const SOCKET_URL = 'ws://localhost:3000'

const socket = io(SOCKET_URL)

socket.emit('modify', {
    auth_token: "eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MzcxMGRmOTEzZWZmNDk1NjlhNDczNTUiLCJyb2xlIjoic3R1ZGVudCJ9.gyrUxoBYvv08BsfjxVY86toPW3H3saeMO3o_fXYgIao",
    codeblock_token: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiNjM3MTBkZjkxM2VmZjQ5NTY5YTQ3MzU1IiwiY29kZWJsb2NrX2lkIjoiNjM3MzhkMTUwZmZhYjlkN2NjYjJhZWZkIiwidXVpZCI6Ijk1NTAzODg0LTc4YTQtNGYwYy1hZTNlLTQxNWMxYTc2MGMxMyJ9.fw0tuINnp3vMkHJWLOsjX5ibjXJ81XERyRO2HQBojiE",
    code: "qwertyuiop1"
    // auth_token: "eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MzcwZGQ5MzQ0YWFjODM5MjQwYzg0YzkiLCJyb2xlIjoibWVudG9yIn0.YFv-R0M8dqS4WdNvRdpWu9MORG603Uy5YNWZdzTbhAE",
    // codeblock_token: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiNjM3MGRkOTM0NGFhYzgzOTI0MGM4NGM5IiwiY29kZWJsb2NrX2lkIjoiNjM3MjU3MzUxMzBhYzdiMTMzZDBlOTZjIiwidXVpZCI6IjQzNDY2MzQzLTNhMGItNGRhNC1iNjBlLTllYjc3NTgyNjFhYyJ9.wxwnh8yOmSx8ngU2GeKiiTQZG3LoT1BoMSfGXhtGBBk",
    // code: "New code yeaa"
})
