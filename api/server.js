const express = require('express');
const app = express();

// Defining routes
app.use('/api', require('./routes'));
app.use('/view', require('./views'));

// Server
app.listen(3000, () => console.log(`GameX API running on port 3000!`));
