const express = require('express')
const server = express()
const router = require('./routes/router')
const PORT = process.env.PORT || 3000

// handles security
const helmet = require('helmet')
const cors = require('cors')

// configure helmet
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbeddedPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.set('view engine', 'ejs')
server.use('/', router)

server.listen(PORT, ()=> console.log(`Well here we go again..: ${PORT}`))