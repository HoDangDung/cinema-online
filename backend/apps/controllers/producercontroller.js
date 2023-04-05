var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var Producer = require("./../model/producer");
var ProducerService = require("./../services/producerService");

router.get("/", function (req, res) {
    res.json({ "message": "this is producer" });
});

router.get("/producer-list", async function (req, res) {
    var producerService = new ProducerService();
    var producer = await producerService.getProducertList();
    res.json(producer);
});
router.get("/get-producer", async function (req, res) {
    var producerService = new ProducerService();
    var producer = await producerService.getProducer(req.query.id);
    res.json(producer);
});

router.post("/insert-producer", async function (req, res) {
    var producerService = new ProducerService();
    var producer = new Producer();
    producer.name = req.body.name;
    var result = await producerService.insertProducer(producer);
    res.json({ status: true, message: "" });
});

router.post("/update-producer", async function (req, res) {
    var producerService = new ProducerService();
    var producer = new Producer();
    producer._id = new ObjectId(req.body.Id);
    producer.name = req.body.name;
    await producerService.updateProducer(producer);
    res.json({ status: true, message: "" });
});

router.delete("/delete-producer", async function (req, res) {
    var producerService = new ProducerService();
    await producerService.deleteProducer(req.query.id);
    res.json({ status: true, message: "" });
});
module.exports = router;
