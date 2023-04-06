const { ObjectId } = require('mongodb');
var config = require("../../config/setting.json");
class ShowtimesService {
    databaseConnection = require('../database/database');
    showtimes = require('./../model/showtimes');

    client;
    showtimesDatabase;
    showtimesCollection;
    constructor() {
        this.client = this.databaseConnection.getMongoClient();
        this.showtimesDatabase = this.client.db(config.mongodb.database);
        this.showtimesCollection = this.showtimesDatabase.collection("showtimes");
    }
    async deleteShowtimes(id) {
        return await this.showtimesCollection.deleteOne({ "_id": new ObjectId(id) });
    }
    async updateShowtimes(showtimes) {
        return await this.showtimesCollection.updateOne({ "_id": new ObjectId(showtimes._id) }, { $set: showtimes });
    }
    async insertShowtimes(showtimes) {
        return await this.showtimesCollection.insertOne(showtimes);
    }
    async getShowtimes(id) {
        return await this.showtimesCollection.findOne({ "_id": new ObjectId(id) }, {});
    }
    async getShowtimesList() {
        const cursor = await this.showtimesCollection.find({}, {}).skip(0).limit(100);
        return await cursor.toArray();
    }
}
module.exports = ShowtimesService;
