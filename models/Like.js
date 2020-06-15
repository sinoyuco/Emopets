const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    liker: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    liked: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
})

module.exports = Like = mongoose.model('Like', LikeSchema);