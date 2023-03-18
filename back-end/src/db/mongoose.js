const mongoose = require('mongoose');
const url = "mongodb+srv://sa:sa@cluster0.ftb6vvr.mongodb.net/cinema-online";

mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Connecting to MongoDB");
    }).catch((error)=>{
        console.log("line 11 error");
    });