const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familySchema = mongoose.Schema({
    pet: {
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    },
    userGroup: {
        type: Array
    }

})

const Family = mongoose.model('Family', familySchema)

module.exports = { Family }