const express = require('express');
const router = express.Router();

// Settings headers
router.use((req, res, next) => {
  res.type('json');
  res.set('X-Powered-By', 'Dea7h');
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

// router.use('/users', require('./users'));
// router.use('/register', require('./register'));
router.use('/game', require('./game'));
router.use('/objects', require('./objects'));

module.exports = router;
