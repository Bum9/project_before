const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const nunjucks = require("nunjucks");
const dotenv = require("dotenv");
// const passport = require("passport");

dotenv.config({ path: path.join(__dirname, "/.env") });

/**라우터 자리
 *
 *
 */

const { sequelize } = require("./models");
// const passportConfig = require("./passport");

const app = express();
// passportConfig();
// app.set("port", process.env.PORT || 8001);
// app.set("view engine", "html");
// nunjucks.configure("views", {
//   express: app,
//   watch: true,
// });
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    //모든 request마다 기존에 있던 session에 아무런 변경사항이 없을 시에도
    //해당 session을 다시 저장하는 옵션
    //(request마다 저장), false로 고정해둘것

    saveUninitializeed: false,
    //request 접수시 새롭게 생성된 session에 아무런 작업이 이루어지지 않음
    //empty session이 저장되는 것을 방지하기 위해 false로 고정

    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
// app.use(passport.initialize());
// app.use(passport.session());

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log("Server is listening on port", app.get("port"));
});