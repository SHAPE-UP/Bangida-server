const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: { // 이름(닉네임)
        type: String,
        maxlength: 50
    },
    email: { // 이메일
        type: String,
        trim: true,
        unique: 1
    },
    password: { // 비밀번호
        type: String,
        minlength: 5
    },
    familyID: {  // 가족 그룹 ID
        type: String
    },
    familyCode: {  // 가족 공유 코드
        type: String
    },
    image: String, // 프로필사진
    // sns 계정 넣는 방법?
    tested: {  // 성향 점검 테스트 수행 여부
        type: Boolean,
        default: false
    },
    achieve:[{
        type: Boolean,
        default: false
    }],
    // role:{ // 역할
    //     type: String,
    //     // 그룹원 or 그룹장
    // },
    // acheivement:{ 
    //     type: String
    // },
    propensityResult:{ // 성향 점검 결과
        type: String
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    },
})


userSchema.pre('save', function( next ) {
    var user = this; 

    // 비밀번호가 변경되었을 때에만 동작하도록 (다른 필드 X)
    if (user.isModified('password')) { 
        // 비밀번호를 암호화
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err)
                // Store hash in your password DB.
                user.password = hash 
                next()   
            });
        });
    } else {
        next()
    }
    
})

userSchema.methods.comparePassword = function(plainPassword, cb) {

    //plainPassword:   암호화된비밀번호:  
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return cb(err);
        cb(null, isMatch)
    })
}


const User = mongoose.model('User', userSchema)

module.exports = { User }