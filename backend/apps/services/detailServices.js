const { ObjectId } = require('mongodb');
var config = require("../../config/setting.json");
class DetailService {
    databaseConnection = require('../database/database');
    detail = require('./../model/detail');

    client;
    detailDatabase;
    detailCollection;
    constructor() {
        this.client = this.databaseConnection.getMongoClient();
        this.detailDatabase = this.client.db(config.mongodb.database);
        this.detailCollection = this.detailDatabase.collection("detail");
    }
    async deleteDetail(id) {
        return await this.detailCollection.deleteOne({ "_id": new ObjectId(id) });
    }
    async updateDetail(detail) {
        return await this.detailCollection.updateOne({ "_id": new ObjectId(detail._id) }, { $set: detail });
    }
    async insertDetail(detail) {
        return await this.detailCollection.insertOne(detail);
    }
    async getDetail(id) {
        return await this.detailCollection.findOne({ "_id": new ObjectId(id) }, {});
    }
    async getDetailList() {
        const cursor = await this.detailCollection.find({}, {}).skip(0).limit(100);
        return await cursor.toArray();
    }
}
module.exports = DetailService;
