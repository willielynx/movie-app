const express = require('express')
const router = express.Router()

const { actorDao: dao } = require('../../daos/dao')

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// gives actors with last name with given letter
router.get('/last/:letter', (req, res)=> {
    dao.findByLetter(res, dao.table, req.params.letter)
})

router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table)
})




module.exports = router