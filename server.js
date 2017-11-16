/**
 * Requiring in the modules needed to run the server
 */

const express = require('express');
const path = require('path');

const app = express();

// Using the static path for the client folder
// app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/static', express.static('./build/static'))


// Serving the main page of the application
app.use((req, res, next) => {
  console.log('serving:', req.url);

  /////////////////////////////////////////
  // here was the problem
  // the server first serves the index.html file
  // but then index.html requests bundle.js
  // but the server serves out index.html again instead of bundle.js
  /////////////////////////////////////////

  //the solution is to ignore /static requests
  
  if (!/\/static\//.test(req.url)) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
  }
});


const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('running')
});