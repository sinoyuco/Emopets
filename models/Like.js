const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    liked: {
        type: String,
        required: true
    }
})

module.exports = Like = mongoose.model('Like', LikeSchema);