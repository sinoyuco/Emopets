const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    liker: {
        type: Schema.Types.ObjectId, 
        ref: 'users'
    },
    liked: {
        type: Schema.Types.ObjectId, 
        ref: 'users'
    }
})

module.exports = Like = mongoose.model('likes', LikeSchema);