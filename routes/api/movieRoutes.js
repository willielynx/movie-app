const express = require('express')
const router = express.Router()
const { movieDao: dao} = require('../../daos/dao')

router.get('/', (req, res)=> {
    dao.findAll( res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

router.get('/all/movies', (req, res) => {
    dao.findMovieDao(res, dao.table)
})

router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table)
})
module.exports = router