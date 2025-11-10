const express = require('express')
const router = express.Router()
const { productionDao: dao} = require('../../daos/dao')

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

router.get('/name/:letter', (req, res)=> {
    dao.findByName(res, dao.table, req.params.letter)
})

router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table)
})
module.exports = router