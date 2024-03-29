const express = require("express"); // express 모듈을 가져옴
const app = express(); // 새 앱을 만듦
const port = 8001; // 백 서버 포트 설정
const config = require("./config/key");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser"); // 로그인 토큰을 쿠키에 저장하기

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); // 바디파서가 클라이언트에서 오는 정보를 분석해서 가져올 수 있도록

//application/json
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    //  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  // 루트 디렉토리에 라우트
  res.send("Hello World!~~ from.root"); // 출력
});

// 우리가 사용하는 라우터
app.use("/api/users", require("./routes/users"));
app.use("/api/family", require("./routes/family"));
app.use("/api/pet", require("./routes/pet"));
app.use("/api/budget", require("./routes/budget"));
app.use("/api/diary", require("./routes/diary"));
app.use("/api/walkreview", require("./routes/walkreview"));
app.use("/api/comment", require("./routes/comment"));
app.use("/api/walkplace", require("./routes/walkplace"));
app.use("/api/todo", require("./routes/todo"));
app.use("/api/insert", require("./routes/insert"));
app.use("/api/voice", require("./routes/voice"));
//app.use('/api/simulation', require('./routes/simulation'));

app.listen(port, () => {
  // 포트(port)에서 실행
  console.log(`Example app listening on port ${port}`);
});
