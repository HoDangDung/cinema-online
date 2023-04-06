var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var Showtimes = require("./../model/showtimes");
var ShowtimesService = require("./../services/showtimesService");

router.get("/", function (req, res) {
    res.json({ "message": "this is showtimes" });
});

router.get("/showtimes-list", async function (req, res) {
    var showtimesService = new ShowtimesService();
    var showtimes = await showtimesService.getShowtimesList();
    res.json(showtimes);
});
router.get("/get-showtimes", async function (req, res) {
    var showtimesService = new ShowtimesService();
    var showtimes = await showtimesService.getShowtimes(req.query.id);
    res.json(showtimes);
});

router.post("/insert-showtimes", async function (req, res) {
    var showtimesService = new ShowtimesService();
    var showtimes = new Showtimes();
    showtimes.time_start = req.body.time_start;
    showtimes.time_end = req.body.time_end;
    var result = await showtimesService.insertShowtimes(showtimes);
    res.json({ status: true, message: "" });
});

router.post("/update-showtimes", async function (req, res) {
    var showtimesService = new ShowtimesService();
    var showtimes = new Showtimes();
    showtimes._id = new ObjectId(req.body.Id);
    showtimes.time_start = req.body.time_start;
    showtimes.time_end = req.body.time_end;
    await showtimesService.updateShowtimes(showtimes);
    res.json({ status: true, message: "" });
});

router.delete("/delete-showtimes", async function (req, res) {
    var showtimesService = new ShowtimesService();
    await showtimesService.deleteShowtimes(req.query.id);
    res.json({ status: true, message: "" });
});
module.exports = router;
