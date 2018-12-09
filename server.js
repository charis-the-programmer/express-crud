const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse requests of content-type - application/x-www-urlencoded & application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// configure the db
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// connect to db
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('successfully connected to the database');
}).catch(err => {
    console.log('error connecting to database: ', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({
        "message": "welcome to my node api"
    });
});

// require notes routes
require('./app/routes/note.routes')(app);

app.listen(3000, () => {
    console.log("Server started. Listening on port 3000.");
});