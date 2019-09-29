const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];
var waitlist = [];

var dummy = {
    name: "Thor",
    phone: "455.909.8888",
    email: "dana",
    uniqueID: 4
};

app.get('/api/reservation', (req, res) => {
    return res.json(reservations);
});

app.post('/api/reservation', (req, res) => {
    var newReservation = req.body;
    console.log(newReservation);
    reservations.push(newReservation);
    res.json(newReservation);

});

app.get('/view', (req, res) => {
    res.sendFile(path.join(__dirname, 'view.html'));
});
app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'addReservation.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});
