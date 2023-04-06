const { ObjectId } = require('mongodb');
var config = require("../../config/setting.json");
class CinemaRoomService {
    databaseConnection = require('../database/database');
    cinemaroom = require('../model/cinemaroom');

    client;
    cinemaroomDatabase;
    cinemaroomCollection;
    constructor () {
        this.client = this.databaseConnection.getMongoClient();
        this.cinemaroomDatabase = this.client.db(config.mongodb.database);
        this.cinemaroomCollection = this.cinemaroomDatabase.collection("cinemaroom");
    }
    async deleteCinemaRoom(id) {
        return await this.cinemaroomCollection.deleteOne({ "_id": new ObjectId(id) });
    }
    async updateCinemaRoom(cinemaroom) {
        console.log(cinemaroom._id, cinemaroom);
        return await this.cinemaroomCollection.updateOne({ "_id": new ObjectId(cinemaroom._id) }, { $set: cinemaroom });
    }
    async insertCinemaRoom(cinemaroom) {
        return await this.cinemaroomCollection.insertOne(cinemaroom);
    }
    async getCinemaRoom(id) {
        return await this.cinemaroomCollection.findOne({ "_id": new ObjectId(id) }, {});
    }
    async getCinemaRoomList() {
        const cursor = await this.cinemaroomCollection.find({}, {}).skip(0).limit(100);
        return await cursor.toArray();
    }
}
module.exports = CinemaRoomService;