const express = require('express');
const app = express();

// Settings headers and stuff
app.use((req, res, next) => {
  res.type('json');
  res.set('X-Powered-By', 'Dea7h');
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

// Defining routes
app.use('/api', require('./routes'));
app.use('/view', require('./views'));

// Server
app.listen(3000, () => console.log(`GameX API running on port 3000!`));
