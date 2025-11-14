const express = require('express')
const router = express.Router()
const {genreDao: dao} = require('../../daos/dao')

router.get('/', (req, res)=> {
    dao.findAll( res, dao.table)
})


router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

router.get('/genre/:genre', (req, res)=> {
    dao.movieByGenre(res, dao.table, req.params.genre)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})
router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table)
})

router.patch('/update/:id', (req, res)=> {
    dao.update(req, res, dao.table)
})

module.exports = router