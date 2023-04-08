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
    movies.movie_info = req.body.movie_info;
    movies.genre_id = req.body.genre_id;
    movies.producer_id = req.body.producer_id;
    movies.showtimes_id = req.body.showtimes_id;
    movies.user_id = req.body.user_id;
    movies.runtime = req.body.runtime;
    var result = await moviesService.insertMovies(movies);
    res.json({ status: true, message: "" });
});

router.put("/update-movies", async function (req, res) {
    var moviesService = new MoviesService();
    var movies = new Movies();
    movies._id = new ObjectId(req.body.Id);
    movies.name = req.body.name;
    movies.movie_info = req.body.movie_info;
    movies.genre_id = req.body.genre_id;
    movies.producer_id = req.body.producer_id;
    movies.showtimes_id = req.body.showtimes_id;
    movies.user_id = req.body.user_id;
    movies.runtime = req.body.runtime;
    await moviesService.updateMovies(movies);
    res.json({ status: true, message: "" });
});

router.delete("/delete-movies", async function (req, res) {
    var moviesService = new MoviesService();
    await moviesService.deleteMovies(req.query.id);
    res.json({ status: true, message: "" });
});
module.exports = router;
