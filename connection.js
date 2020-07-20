const mongoose = require('mongoose');
const url="mongodb+srv://demo:demo1234@cluster0.z91vg.mongodb.net/test"
mongoose.Promise = global.Promise;

// var URL="mongodb+srv://demo:demo1234@cluster0.z91vg.mongodb.net/test";
// Connecting to the database
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});