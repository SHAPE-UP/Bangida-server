const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = mongoose.Schema({ 

    breed: String,
    group: String,
    coat: String,
    size: String,
    height: String,
    weight: String,
    body: String, 
    character: String,

})

const Dog = mongoose.model('Dog', dogSchema)

module.exports = { Dog }