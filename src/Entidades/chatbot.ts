var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatbotSchema = new Schema({
   id:String,
   name:String
});

module.exports = mongoose.model('chatbot', chatbotSchema);