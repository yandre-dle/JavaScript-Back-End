const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    articles: [{
        type: mongoose.Types.ObjectId,
        ref: 'Article'
    }]
});

userSchema.methods = {
    matchPassword: function (password) {
        return password === this.password;
    }
}

module.exports = mongoose.model('User', userSchema);