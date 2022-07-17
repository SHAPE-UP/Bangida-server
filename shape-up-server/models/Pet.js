const mongoose = require('mongoose');

const petSchema = mongoose.Schema({ 
    name: { // 이름
        type: String,
        maxlength: 50
    },
    info:{
        breed: String,
        group: String,
        coat: String,
        size: String,
        height: String,
        weight: String,
        body: String, 
        character: String,
    },
    image: String, // 이미지
    sex: Boolean, // 성별
    
})

const Pet = mongoose.model('Pet', petSchema)

module.exports = { Pet }