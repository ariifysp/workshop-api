const express = require('express')
const router = express.Router()

router.use('/api/v1', require('./v1'))

// 404
router.use((req, res) => {
  return res.status(404).send({ status: 0, message: 'URL Not found.' })
})

// 500 - Any server error
router.use((error, req, res) => {
  return res.status(500).send({ status: 0, message: error })
})

module.exports = router