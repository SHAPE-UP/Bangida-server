const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
const { Family } = require('../models/Family');
const { auth } = require("../middleware/auth");

// familyID 반환
router.post("/getFamilyID", (req, res)=>{
  let userID = req.body._id
  // data 등록
  User.find({_id: userID}) 
  .exec((err, user) => {
    if(err) return res.json({success: false, err})
    if(userID) return res.status(200).json({
      success: true,
      message: "familyID를 반환했습니다.",
      user
    })
  })

})

// 가족 그룹 생성
// req: user _id
router.post("/addFamily", (req, res)=>{
  // 요청: userID
  const family = new Family()

  // 랜덤 코드 생성하기
  const randomString = Math.random().toString(36).slice(2)
  // 값 넣기
  family.familyCode = randomString
  family.userGroup.push(req.body.userID)

  // data 등록
  family.save((err, family) => {
    if(err) return res.json({success: false, err})
    if(family){
      User.findOneAndUpdate({_id: req.body.userID},{$set: {familyID: family._id}})
      .exec((err, update) =>{
        if(err) return res.status(400).json({success: false, update})
        if(update) return res.status(200).json({success: true, message: "가족 그룹 생성 완료!", familyID: family._id})
      })
    }
  })

})

// 가족 그룹 참여
// req: user _id, familyCode
router.post("/joinFamily", (req, res) => {
  let familyCode = req.body.familyCode
  let userEmail = req.body.email
  
User.find({email: userEmail}) 
.exec((err, user) => {
  if(err) 
    return res.status(400).json({success: false, user})
  if(user){
    Family.findOneAndUpdate({familyCode: familyCode},{$addToSet: {userGroup: user[0]._id}})
    .exec((err, family) => {
      if(err) 
        return res.status(400).json({success: false, family})
      if(family){ // 유효한 공유 코드인지 확인
        //User에 값을 넣어준다.
        console.log(family._id)
        User.findOneAndUpdate({email: userEmail},{$set: {familyID: family._id}})
        .exec((err, update) =>{
          if(err) 
            return res.status(400).json({success: false, update})
            return res.status(200).json({success: true, message: "가족 그룹 참여 완료!", familyID: family._id})
        })
      } 
      else{ // 유효한 공유코드가 아닐 때
        return res.status(200).json({success: false, message: "유효한 공유코드가 아닙니다."})
      }
    })
  } 
  else{
    return res.status(200).json({success: false, message: "유효한 이메일이 아닙니다."})
  }
})

})


// 회원가입 라우트
router.post('/register', (req, res) => {

    // 회원가입 시 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터베이스에 넣어준다

    const user = new User(req.body) // json 객체가 들어 있음 (bodyparser 이용)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})

// 로그인 라우트
router.post('/login', (req, res) => {
  // 요청된 이메일이 DB에 있는지 찾는다
  
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      })
    }
    //  이메일이 있다면 비밀번호가 맞는 비밀번호인지 확인
    // comparePassword() 메소드는 User 스키마에 만든다
    user.comparePassword(req.body.password, (err, isMatch) => {

        if(!isMatch) return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다."})
        // 토큰 생성 과정 삭제
        res.status(200).json({ loginSuccess: true, userID: user._id, userName: user.name, familyID: user.familyID })

    })
  })
})

// 성향 점검 테스트 완료했을 때 호출
// req: user_id
router.put("/completeTest", (req,res) => {
  User.updateOne({ _id: req.body.userID }, {$set: {tested: true}}, 
    (err, testInfo) =>{
    if(err) return res.json({success:false, err})
    return res.status(200).json({
      success:true,
      message: "성향 점검 테스트 완료"
    })
  })
})


module.exports = router;