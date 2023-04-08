var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
var controller = require(__dirname + "/apps/controllers");
app.use(controller);


app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
app.use("/partical", express.static(__dirname + "/views/partical"));


var server = app.listen(3000, function() {
    console.log("server is running" + "\n" + "http://localhost:3000/");
});