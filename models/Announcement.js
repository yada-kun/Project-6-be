const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnouncementSchema = new Schema({
    title: String,
    image: String,
    content: String,
    dateAdded:Date
});

// Singular version of the collection name
module.exports = mongoose.model('Announcement', AnnouncementSchema);