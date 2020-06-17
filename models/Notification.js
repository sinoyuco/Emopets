const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    matched_with: {
        type: String,
        required: true
    }
})

module.exports = Notification = mongoose.model('Notification', NotificationSchema);