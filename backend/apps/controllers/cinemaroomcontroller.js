var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var CinemaRoom = require("../model/cinemaroom");
var CinemaRoomService = require("../services/cinemaroomService");

router.get("/", function(req, res) {
    res.json({ "message": "this is cinemaroom" });
});

router.get("/cinemaroom-list", async function(req, res) {
    var cinemaroomService = new CinemaRoomService();
    var cinemaroom = await cinemaroomService.getCinemaRoomList();
    res.json(cinemaroom);
});
router.get("/get-cinemaroom", async function(req, res) {
    var cinemaroomService = new CinemaRoomService();
    var cinemaroom = await cinemaroomService.getCinemaRoom(req.query.id);
    res.json(cinemaroom);
});

router.post("/insert-cinemaroom", async function(req, res) {
    var cinemaroomService = new CinemaRoomService();
    var cinemaroom = new CinemaRoom();
    cinemaroom.room_number = req.body.room_number;
    var result = await cinemaroomService.insertCinemaRoom(cinemaroom);
    res.json({ status: true, message: "true" });
});

router.put("/update-cinemaroom", async function(req, res) {
    var cinemaroomService = new CinemaRoomService();
    var cinemaroom = new CinemaRoom();
    cinemaroom._id = new ObjectId(req.body.id);
    cinemaroom.room_number = req.body.room_number;
    console.log(cinemaroom._id);
    await cinemaroomService.updateCinemaRoom(cinemaroom);
    res.json({ status: true, message: "" });
});

router.delete("/delete-cinemaroom", async function(req, res) {
    var cinemaroomService = new CinemaRoomService();
    await cinemaroomService.deleteCinemaRoom(req.query.id);
    res.json({ status: true, message: "" });
});

module.exports = router;