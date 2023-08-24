const { isEmail } = require('validator');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: [true , 'Please Enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail , 'Please answer a valid email'],
    },
    password: {
        type: String,
        required: [true , 'Please Enter an email'],
        minlength: [6 , 'Minimum password length is 6 characters'],
    },
});

const User = mongoose.model('ims' , userSchema);
module.exports = User;


