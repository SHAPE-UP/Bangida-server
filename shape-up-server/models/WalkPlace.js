const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walkplaceSchema = mongoose.Schema({ 
    familyID:{ // 가족 ID
        type: Schema.Types.ObjectId, ref: 'Family'
    },
    address: { // 주소
        type: String
    },
    latitude: { // 위도
        type: Number
    },
    longitude: { // 경도
      type: Number
  },
  
})

const walkPlace = mongoose.model('walkPlace', walkplaceSchema)

module.exports = { walkPlace }