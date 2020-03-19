const { Schema, model, Types } = require('mongoose');

const articleSchema = new Schema({
    section: {
        type: String,
        unique: true,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: Types.ObjectId, ref: 'User'
    }

});

module.exports = model('Article', articleSchema);