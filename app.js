const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3003;

// Parsing middleware
// Pars application/x-wwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

// Parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(port, () => console.log(`Listening on port ${3003}`));