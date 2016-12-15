const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index');
  });
};
