var mongoose = require('mongoose');
var User = new mongoose.Schema({
    login : {
        type: String,
        unique: true,
        required: true
    },
    pass : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', User)