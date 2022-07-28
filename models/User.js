const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    title: String,
    image: String,
    description: String,
    translator: String
    
});

// Singular version of the collection name
module.exports = mongoose.model('User', UserSchema);