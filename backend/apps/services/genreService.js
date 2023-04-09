const { ObjectId } = require('mongodb');
var config = require("../../config/setting.json");
class GenreService {
    databaseConnection = require('../database/database');
    genre = require('./../model/genre');

    client;
    genreDatabase;
    genreCollection;
    constructor() {
        this.client = this.databaseConnection.getMongoClient();
        this.genreDatabase = this.client.db(config.mongodb.database);
        this.genreCollection = this.genreDatabase.collection("genre");
    }
    async deleteGenre(id) {
        return await this.genreCollection.deleteOne({ "_id": new ObjectId(id) });
    }
    async updateGenre(genre) {
        return await this.genreCollection.updateOne({ "_id": new ObjectId(genre._id) }, { $set: genre });
    }

    async updateGenreById(genre) {
        return await this.genreCollection.updateOne({ "_id": new ObjectId(genre._id)},{$set: {name: genre.name}});
    }

    async insertGenre(genre) {
        return await this.genreCollection.insertOne(genre);
    }
    async getGenre(id) {
        return await this.genreCollection.findOne({ "_id": new ObjectId(id) }, {});
    }
    async getGenreList() {
        const cursor = await this.genreCollection.find({}, {}).skip(0).limit(100);
        return await cursor.toArray();
    }
}
module.exports = GenreService;
