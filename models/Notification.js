const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: String,
        required: true
    }
})

module.exports = Notification = mongoose.model('Notification', NotificationSchema);