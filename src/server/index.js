/**
@author Ganesh Khutwad
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const os = require('os');
const app = express();

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(8080, () => console.log('Listening on port 8080!'));
