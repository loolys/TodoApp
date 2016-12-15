const express = require('express');
const controller = require('./controllers/controller');

const app = express();


app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
controller(app);
app.listen(3000);
