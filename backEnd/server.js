//Require dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Initiallize express into app variable
const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config, could have place code of './config/keys' here but its good practice to store db key in separate file
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .then(err => console.log(err));

//For running the server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));