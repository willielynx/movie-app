const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

// ROOT
router.get('/api', (req, res)=> {
    res.json({
        'Actors': `http://localhost:${PORT}/api/actor`,
        'Directors': `http://localhost:${PORT}/api/director`,
        'Genres': `http://localhost:${PORT}/api/genre`,
        'Movies': `http://localhost:${PORT}/api/movie`,
        'Production': `http://localhost:${PORT}/api/production`,
        'Streaming_Platform': `http://localhost:${PORT}/api/streaming_platform`
    })
})

const endpoints = [
    'actor',
    'director',
    'genre',
    'movie',
    'production',
    'streaming_platform'
]

endpoints.forEach(endpoint => {
    router.use(`/api/${endpoint}`, require(`./api/${endpoint}Routes`))
})

router.use((req, res, next)=> {
    res.status(404)
    .send("<h1>404 Error. This page does not exist </h1>.")
})

module.exports = router