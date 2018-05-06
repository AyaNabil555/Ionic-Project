var express = require('express'),
  app = express();

  mongoose = require('mongoose'),
  Employee = require('./api/models/model'), 
  bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/db'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/route'); 
routes(app); 








app.listen(5000);

console.log('listen on 5000');