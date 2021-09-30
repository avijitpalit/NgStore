const mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        trim: true,

    },
    lname: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;