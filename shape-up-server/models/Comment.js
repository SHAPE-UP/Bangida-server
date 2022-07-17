const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema({ 
    walkReviewID:{ // 산책리뷰 ID
        type: Schema.Types.ObjectId, ref: 'WalkReview'
    },
    writer: { // todo 내용
        type: Schema.Types.ObjectId, ref: 'User'
    },
    content: { // 작성 내용
        type: String
    },
  
}, { timestamps: true })

const Comment = mongoose.model('Comment', commentSchema)

module.exports = { Comment }