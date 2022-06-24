const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    image: String,
    sex: Boolean,
    
})

const Pet = mongoose.model('Pet', petSchema)

module.exports = { Pet }