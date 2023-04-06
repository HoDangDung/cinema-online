var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var User = require("./../model/user");
var UserService = require("./../services/userService");

router.get("/", function (req, res) {
    res.json({ "message": "this is user" });
});

router.get("/user-list", async function (req, res) {
    var userService = new UserService();
    var user = await userService.getUsertList();
    res.json(user);
});
router.get("/get-user", async function (req, res) {
    var userService = new UserService();
    var user = await userService.getUser(req.query.id);
    res.json(user);
});

router.post("/insert-user", async function (req, res) {
    var userService = new UserService();
    var user = new User();
    user.account = req.body.account;
    user.pass = req.body.pass;
    user.email = req.body.email;
    user.name = req.body.name;
    user.phone = req.body.phone;
    user.birthday = req.body.birthday;
    var result = await userService.insertUser(user);
    res.json({ status: true, message: "" });
});

router.post("/update-user", async function (req, res) {
    var userService = new UserService();
    var user = new User();
    user._id = new ObjectId(req.body.Id);
    user.account = req.body.account;
    user.pass = req.body.pass;
    user.email = req.body.email;
    user.name = req.body.name;
    user.phone = req.body.phone;
    user.birthday = req.body.birthday;
    await userService.updateUser(user);
    res.json({ status: true, message: "" });
});

router.delete("/delete-user", async function (req, res) {
    var userService = new UserService();
    await userService.deleteUser(req.query.id);
    res.json({ status: true, message: "" });
});
module.exports = router;
