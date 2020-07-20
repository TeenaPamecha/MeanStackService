// module.exports = (app) => {
    const express = require('express');
    var router = express.Router();
    const photo = require('../Controller/photoController.js');

    // Add a new Photo
    router.post('/create', (req, res) => {photo.create});

    // Retrieve all Photos
    app.get('/allPhoto', (req, res) => {photo.findAll});

    // Retrieve a single Photo with Id
    app.get('/photo/:Id',(req, res) => { photo.findOne});

    // Update a Photo with Id
    app.put('/photo/:Id',(req, res) => { photo.update});

    // Delete a Photo with Id
    app.delete('/photo/:Id', (req, res) => {photo.delete});
// }