const monggose = require('mongoose');

const userSchema = monggose.Schema({
    name: {
        type: String,
        maxLength: 50
    }, 
    email: {
        type: String,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        minLength: 5,
    },
    lastname: {
        type: String,
        maxLength: 50,
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number
    }
})

const User = monngose.model('User', userSchema)

module.exports = { User }