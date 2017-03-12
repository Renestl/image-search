if(process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express			= require('express');
const bodyParser		= require('body-parser');
const methodOverride 	= require("method-override");
const expressSanitizer	= require('express-sanitizer');
const mongoose			= require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes/index');

const db = require('./config/db');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());

app.use('/', routes);

app.listen(port, () => {
	console.log("Server listening");
});