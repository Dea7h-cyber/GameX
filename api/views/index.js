const express = require('express');
const router = express.Router();

// Settings headers
router.use((req, res, next) => {
  res.type('html');
  res.set('X-Powered-By', 'Dea7h');
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

router.use('/game', require('./game'));
router.use('/register', require('./register'));
router.use('/settings', require('./settings'));

module.exports = router;
