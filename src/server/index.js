/**
@author Ganesh Khutwad
 */
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../../build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.listen(8080, () => console.log('Listening on port 8080!'));
