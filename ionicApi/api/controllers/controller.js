var mongoose = require('mongoose'),
student = mongoose.model('students');

exports.liststudent = function(req, res) {
  
  
  student.find({}, function(err, std) {
    if (err)
      res.send(err);
    res.json(std);
  });
};




exports.createstudent = function(req, res) {
  
  var nstd = new student(req.body);
  nstd.save(function(err, std) {
    if (err)
      res.send(err);
    res.json(std);
  });
};



exports.readstudent = function(req, res) {
  
  student.findById(req.params.stdId, function(err, std) {
    if (err)
      res.send(err);
    res.json(std);
  });
};


exports.updatestudent = function(req, res) {
  
  student.findOneAndUpdate({_id: req.params.stdId}, req.body, {new: true}, function(err, std) {
    if (err)
      res.send(err);
    res.json(std);
  });
};


exports.deletestudent = function(req, res) {
  student.remove({
    _id: req.params.stdId
  }, function(err, std) {
    if (err)
      res.send(err);
    res.json({ message: 'student successfully deleted' });
  });
};
