const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
    chapterNumber: Number,
    title: String,
    content: String,
    dateAdded: String
});

// Singular version of the collection name
module.exports = mongoose.model('Chapter', ChapterSchema);