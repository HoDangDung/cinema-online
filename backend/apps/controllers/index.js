var express = require("express");
var router = express.Router();
router.use("/genre", require(__dirname + "/genrecontroller"));
router.use("/movies", require(__dirname + "/moviescontroller"));
router.use("/user", require(__dirname + "/usercontroller"));
router.use("/detail", require(__dirname + "/detailcontroller"));
router.get("/", function (req, res) {
    res.render("index");
});
module.exports = router;