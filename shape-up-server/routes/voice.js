const express = require("express");
const router = express.Router();
const axios = require("axios");

// 음성 분류 결과 요청하기
// req: 경로
// res: 값

router.post("/result/classify", async (req, res) => {
  try {
    const path = await req.body.path; // body에서 보내줌
    console.log(path);
    if (path) {
      await axios
        .post("http://127.0.0.1:5000/api/result/voice", {
          path: path,
        })
        .then(async (response) => {
          const result = response.data.result;
          console.log(response.data);
          return res.status(200).json({ success: true, result: result });
        });
    } else {
      return res.status(200).json({
        success: false,
        message: "음성 파일 경로를 찾을 수 없습니다.",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      success: false,
      message: "음성 분석에 대한 결과를 받아오지 못했습니다.",
    });
  }
});

module.exports = router;
