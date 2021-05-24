const express = require('express');
const path = require('path');

const api = require('./server/routs/api');
// const bodyParser = require('body-parser')

const app = express();
const port = 8080;
app.listen(port, function() {
    console.log(`Running server on port ${port}`);
})

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', api);