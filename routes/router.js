const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000


router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'movie-app home',
        name: "Willynx's Movie App"
    })
})

router.get('/actor-form', (req, res) => {
    res.render('pages/actorform', {
        title: "Actor Form",
        name: "Actor Form"
    })
})

router.get('/director-form', (req,res)=> {
    res.render('pages/directorForm', {
        title: "Director Form",
        name: "Director Form"
    })
})

router.get('/genre-form', (req,res)=> {
    res.render('pages/genreForm', {
        title: "Genre Form",
        name: "Genre Form"
    })
})

router.get('/production-form', (req,res)=> {
    res.render('pages/productionForm', {
        title: "Production Form",
        name: "Production Form"
    })
})

router.get('/streaming-form', (req,res)=> {
    res.render('pages/streamingForm', {
        title: "Streaming Form",
        name: "Streaming Form"
    })
})

router.get('/movie-form', (req,res)=> {
    res.render('pages/movieForm', {
        title: "Movie Form",
        name: "Movie Form"
    })
})

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