const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "hello root" });
});

router.get("/api", (req, res) => {
  res.send({ message: "api" });
});

router.get("/test", (req, res) => {
  res.send({ message: "test" });
});

router.get("/login", (req, res) => {
  res.send({ message: "login" });
});
router.get("/users", async (req, res, next) => {
  res.json([
    { id: 1, username: "fuck react" },
    { id: 2, username: "hate css" },
  ]);
  console.log(res.json);
});

router.get("/*", (req, res) => {
  res.status(404).send("not found");
  res.send(console.log("404"));
});

router.post("/id", (req, res) => {
  const serverId = req.body.id;
  console.log(serverId);
});

module.exports = router;
