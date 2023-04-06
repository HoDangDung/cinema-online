const { ObjectId } = require('mongodb');
var config = require("../../config/setting.json");
class MoviesService {
    databaseConnection = require('../database/database');
    movies = require('../model/movies');

    client;
    moviesDatabase;
    moviesCollection;
    constructor() {
        this.client = this.databaseConnection.getMongoClient();
        this.moviesDatabase = this.client.db(config.mongodb.database);
        this.moviesCollection = this.moviesDatabase.collection("movies");
    }
    async deleteMovies(id) {
        return await this.moviesCollection.deleteOne({ "_id": new ObjectId(id) });
    }
    async updateMovies(movies) {
        return await this.moviesCollection.updateOne({ "_id": new ObjectId(movies._id) }, { $set: movies });
    }
    async insertMovies(movies) {
        return await this.moviesCollection.insertOne(movies);
    }
    async getMovies(id) {
        return await this.moviesCollection.findOne({ "_id": new ObjectId(id) }, {});
    }
    async getMoviestList() {
        const cursor = await this.moviesCollection.find({}, {}).skip(0).limit(100);
        return await cursor.toArray();
    }
}
module.exports = MoviesService;
