var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var Genre = require("./../model/genre");
var GenreService = require("./../services/genreService");

router.get("/", function (req, res) {
    res.json({ "message": "this is genre" });
});

router.get("/genre-list", async function (req, res) {
    var genreService = new GenreService();
    var genre = await genreService.getGenreList();
    res.json(genre);
});
router.get("/get-genre", async function (req, res) {
    var genreService = new GenreService();
    var genre = await genreService.getGenre(req.query.id);
    res.json(genre);
});

router.post("/insert-genre", async function (req, res) {
    var genreService = new GenreService();
    var genre = new Genre();
    genre.name = req.body.name;
    var result = await genreService.insertGenre(genre);
    res.json({ status: true, message: "" });
});

router.put("/update-genre", async function (req, res) {
    var genreService = new GenreService();
    var genre = new Genre();
    genre._id = new ObjectId(req.body.id);
    genre.name = req.body.name;
    await genreService.updateGenre(genre);
    res.json({ status: true, message: "" });
});

router.delete("/delete-genre", async function (req, res) {
    var genreService = new GenreService();
    await genreService.deleteGenre(req.query.id);
    res.json({ status: true, message: "" });
});
module.exports = router;
