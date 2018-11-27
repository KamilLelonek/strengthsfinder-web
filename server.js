const serveStatic = require('serve-static')
const express = require('express')
const app = express()

const port = process.env.PORT
const dist = serveStatic(`${__dirname}/dist`)

app.use(dist)

app.listen(port)
