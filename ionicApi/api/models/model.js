'use strict';
var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

var Schema = mongoose.Schema;


var studentSchema = new Schema({
  _id: Number,
  name: String,
  age:Number
});
studentSchema.plugin(AutoIncrement);
module.exports = mongoose.model('students', studentSchema);
