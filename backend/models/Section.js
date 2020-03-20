const { Schema, model, Types } = require('mongoose');

const sectionSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    owner: {
        type: Types.ObjectId, ref: 'User'
    }

});

module.exports = model('Section', sectionSchema);