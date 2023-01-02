const fs = require('fs')//{ readFile, writeFile } = require('fs')
const express = require('express')
const app = express()
exports.app = app

app.use(express.static('./'))

const server = app.listen(3000, '192.168.1.10', function() {
    const host = server.address().address//require('http')
    const port = server.address().port
    console.log("app listening at http://%s:%s", host, port)
})
