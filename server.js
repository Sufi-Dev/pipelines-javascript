'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1> Hello World </h1>');
});

const port = process.env.PORT||PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);
