const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectID = mongoose.Types.ObjectId;

const NovelSchema = new Schema({
    title: String,
    image: String,
    genre: [{type: String}],
    description: String,
    chapters: [{type:Object}]
});

// Singular version of the collection name
module.exports = mongoose.model('Novel', NovelSchema);