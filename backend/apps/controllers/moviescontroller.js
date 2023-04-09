var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var Movies = require("./../model/movies");
var MoviesService = require("./../services/moviesService");

router.get("/", function (req, res) {
    res.json({ "message": "this is movies" });
});

router.get("/movies-list", async function (req, res) {
    var moviesService = new MoviesService();
    var movies = await moviesService.getMoviestList();
    res.json(movies);
});

router.get("/get-movies", async function (req, res) {
    var moviesService = new MoviesService();
    var movies = await moviesService.getMovies(req.query.id);
    res.json(movies);
});

router.post("/insert-movies", async function (req, res) {
    var moviesService = new MoviesService();
    var movies = new Movies();
    movies.name = req.body.name;
    movies.link = req.body.link;
    movies.times = req.body.times;
    movies.poster = req.body.poster;
    movies.desc = req.body.desc;
    var result = await moviesService.insertMovies(movies);
    res.json({ status: true, message: "" });
});

router.put("/update-movies/:id", async function (req, res) {
    var moviesService = new MoviesService();
    var movies = new Movies();
    movies._id = req.params.id;
    movies.name = req.body.name;
    movies.link = req.body.link;
    movies.times = req.body.times;
    movies.poster = req.body.poster;
    movies.desc = req.body.desc;
    console.log(movies._id);
    try {
        const temp = await moviesService.updateMoviesById(movies);
        res.json({ status: true, message: temp });
    } catch (error) {
        res.status(500).send(error.message);
    }

});

router.delete("/delete-movies", async function (req, res) {
    var moviesService = new MoviesService();
    await moviesService.deleteMovies(req.query.id);
    res.json({ status: true, message: "" });
});
module.exports = router;
