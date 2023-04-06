var express = require("express");
var router = express.Router();
router.use("/genre", require(__dirname +"/genrecontroller"));
router.use("/movies", require(__dirname +"/moviescontroller"));
router.use("/user", require(__dirname +"/usercontroller"));
router.use("/producer", require(__dirname +"/producercontroller"));
router.use("/cinemaroom", require(__dirname +"/cinemaroomcontroller"));
router.use("/showtimes", require(__dirname +"/showtimescontroller"));
router.use("/detail", require(__dirname +"/detailcontroller"));
router.get("/", function(req,res){
    res.render("index");
});
module.exports = router;