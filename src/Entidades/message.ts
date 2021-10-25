var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    id:String,
    conversationId:String,
    timestamp:String,
    from:String,
    to:String,
    text:String,
 });

module.exports = mongoose.model('message', messageSchema);