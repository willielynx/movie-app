const express = require('express')
const router = express.Router()
const { streaming_platformDao: dao} = require('../../daos/dao')

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

router.get('/streaming/:platform', (req, res)=> {
    dao.movieByPlatform(res, dao.table, req.params.platform)
})

router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table)
})


module.exports = router
