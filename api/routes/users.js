const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send(JSON.stringify({
    users: 'complete users list'
  }));
})

module.exports = router