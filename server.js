const express = require('express');
const bodyParser = require('body-parser');
require('./connection');
// create express app
const app = express();
const photoRouter = require('./routes/photo');

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
//Set the Router path which will be responding the user actions
app.use('/photo/', photoRouter);
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "go to back"});
});

// listen for requests
app.listen(5200, () => {
    console.log("Server is listening on port 5200");
});
module.exports=app;