const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('settings view');
});

module.exports = router;
