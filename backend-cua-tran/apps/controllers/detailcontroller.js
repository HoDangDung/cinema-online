var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var Detail = require("./../model/detail");
var DetailService = require("./../services/detailServices");

router.get("/", function (req, res) {
    res.json({ "message": "this is detail" });
});

router.get("/detail-list", async function (req, res) {
    var detailService = new DetailService();
    var detail = await detailService.getDetailList();
    res.json(detail);
});
router.get("/get-detail'", async function (req, res) {
    var detailService = new DetailService();
    var detail = await detailService.getDetail(req.query.id);
    res.json(detail);
});

router.post("/insert-detail", async function (req, res) {
    var detailService = new DetailService();
    var detail = new Detail();
    detail.director = req.body.name;
    detail.director = req.body.name;
    detail.age_limit = req.body.name;
    detail.movie_id = req.body.name;
    detail.genre_id = req.body.name;
    var result = await detailService.insertDetail(detail);
    res.json({ status: true, message: "" });
});

router.post("/update-detail", async function (req, res) {
    var detailService = new DetailService();
    var detail = new Detail();
    detail._id = new ObjectId(req.body.Id);
    detail.director = req.body.name;
    detail.director = req.body.name;
    detail.age_limit = req.body.name;
    detail.movie_id = req.body.name;
    detail.genre_id = req.body.name;
    await detailService.updateDetail(detail);
    res.json({ status: true, message: "" });
});

router.delete("/delete-detail", async function (req, res) {
    var detailService = new DetailService();
    await detailService.deleteDetail(req.query.id);
    res.json({ status: true, message: "" });
});
module.exports = router;
