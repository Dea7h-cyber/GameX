const express = require('express');
const router = express.Router();

const fs = require('fs');

router.get('/', (req, res) => {
  fs.readFile(__dirname + '/../public/game.html', 'utf-8', (err, data) => {
    if (err) {
      console.error('view/game readFile error', err);
    }

    res.send(data);
  });
});

module.exports = router;
