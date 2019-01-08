//Require dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./backEnd/routes/api/items');

//Initiallize express into app variable
const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config, could have place code of './config/keys' here but its good practice to store db key in separate file
const db = require('./backEnd/config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db,{useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes, if there is any request with the url: api/items, or api.items/***/(** represent any other path name)
app.use('/api/items', items);

//For running the server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));