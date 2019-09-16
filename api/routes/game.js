const express = require('express')
const router = express.Router()

const fs = require('fs')

router.get('/', (req, res) => {
  fs.readFile(__dirname + '/../data/game.json', 'utf-8', (err, data) => {
    if (err) {
      console.error("api/game readFile error", err)
    }

    res.send(data)
  })

})

module.exports = router