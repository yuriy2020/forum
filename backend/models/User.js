const {model, Schema, Types} = require('mongoose');

const userSchema = new Schema({
    login: {
        type: String,
        unique:true,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    articles:[{
        type: Types.ObjectId, ref: 'Article'
    }]
});

module.exports = model('User', userSchema);