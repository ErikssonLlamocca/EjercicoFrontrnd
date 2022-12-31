const mongoose = require("mongoose");
const userScchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('user', userScchema);