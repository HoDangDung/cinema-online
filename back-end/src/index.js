// Tham chiếu thư viện
require('./db/mongoose.js');
const express = require('express');
const Genre = require('./models/genre');

const app = express();
app.use(express.json());

app.get('/genre', (req, res) => {
    Genre.find({})
    .then((genre) => {
        res.status(200).send(genre);
    })
    .catch((error) => {
        res.status(400).send('Line 15 ', error.message);
    });
})

// app.post('/genre', (req, res) => {
//     Genre.create(req.body)
//     .then((genre) => {
//         res.status(200).send(genre);
//     })
//     .catch((error) => {
//         res.status(400).send('Line 25 ', error.message);
//     });
// })

app.get('/movie/:id', (req, res) => {
    res.send("Fast and Furiuos " + req.params.id);
})

app.listen(8000, (req, res) => {
    console.log("Server is running port 8000");
})