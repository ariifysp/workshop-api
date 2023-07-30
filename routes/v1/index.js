const express = require('express')
const router = express.Router()

router.use('/user', require('./user'))
router.use('/interview', require('./interview'))

module.exports = router