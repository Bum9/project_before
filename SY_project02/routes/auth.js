const express = require("express");
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
// const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

// router.post("/join", async (req, res) => {
//   res.send({ message: req.data });
//   console.log(req.body.data, " -------->");

//   const { name, address, password, telephone, email } = req.body.data;

//   try {
//     // const emailCheck = User.findOne({ where: "a@a.com" });

//     createUser = User.create({
//       email,
//       name,
//       nickname: "수세미",
//       password,
//       telephone,
//       address,
//     });

//     console.log(req.body.data);
//   } catch {
//     (error) => {
//       console.error(error);
//     };
//   }
// });
// console.log(req);
// const { email, nick, password } = req.body;
// try {
//   const exUser = await User.findOne({ where: { email } });
//   if (exUser) {
//     return res.redirect("/join?error=exist");
//   }
//   const hash = await bcrypt.hash(password, 12);
//   await User.create({
//     email,
//     nick,
//     password: hash,
//   });
//   return res.redirect("/");
// } catch (error) {
//   console.error(error);
//   return next(error);
// }

router.get("/join", async (req, res, next) => {
  const abc = { name: "hello" };
  const userData = await User.findAll({});
  console.log(userData);
  res.send({ data: userData });
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(error);
    }
    if (!user) {
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.log.error(loginError);
        return next(loginError);
      }
      return res.redirect("/");
    });
  })(req, res, next); //미들웨어 내의 미들웨어에는 (req, res, next) 작성
});

router.get("/logout", isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

router.get("/kakao", passport.authenticate("kakao"));
router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

module.exports = router;
