/**
@author Ganesh Khutwad
    - Create HTTP server and host the application.
 */
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const path = require('path');
const app = express();
const port = process.env.PORT || 8284;

app.use(express.static(path.join(__dirname, '../../build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.listen(port, () => console.log('Listening on port 8284!'));
