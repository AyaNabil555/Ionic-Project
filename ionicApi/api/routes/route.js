module.exports = function(app) {
    var std = require('../controllers/controller');
  
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header('Access-Control-Allow-Methods', "GET, POST, OPTIONS, PUT, PATCH, DELETE");
      next();
    })

    app.route('/user')
      .get(std.liststudent)
      .post(std.createstudent);
  
  
    app.route('/user/:stdId')
      .get(std.readstudent)
      .put(std.updatestudent)
      .delete(std.deletestudent);
      
  };
  