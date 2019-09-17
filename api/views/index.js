const express = require('express')
const router = express.Router()

router.use('/users', require('./users'))
router.use('/register', require('./register'))
router.use('/game', require('./game'))

module.exports = router