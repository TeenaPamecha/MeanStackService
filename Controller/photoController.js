const Photo = require('../models/photo.model.js');

// Create and Save a new Photo
exports.create = (req, res) => {
    // Validate request
    console.log('photo is:...',req.body);
    if(!req.body.photo) {
        return res.status(400).send({
            message: "Photo content can not be empty"
        });
};
// Create a Photo
const photo = new Photo({
    word: req.body.word || "Untitled Photo", 
    percentage: req.body.percentage,
    image:req.body.photo
});

// Save Photo in the database
photo.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating the Photo."
    });
});
};

// Retrieve and return all Photos from the database.
exports.findAll = (req, res) => {
    Photo.find()
    .then(photos => {
        res.send(photos);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving photos."
        });
    });
};

// Find a single Photo with a Id
exports.findOne = (req, res) => {
    Photo.findById(req.params.Id)
    .then(photo => {
        if(!photo) {
            return res.status(404).send({
                message: "Photo not found with id " + req.params.Id
            });            
        }
        res.send(photo);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Photo not found with id " + req.params.Id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving photo with id " + req.params.Id
        });
    });
};

// Update a Photo identified by the Id in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.photo) {
        return res.status(400).send({
            message: "Photo can not be empty"
        });
    }

    // Find photo and update it with the request body
    Photo.findByIdAndUpdate(req.params.Id, {
        word: req.body.word || "Untitled Photo",
        percentage: req.body.percentage,
        image:req.body.photo
    }, {new: true})
    .then(photo => {
        if(!photo) {
            return res.status(404).send({
                message: "Photo not found with id " + req.params.Id
            });
        }
        res.send(photo);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Photo not found with id " + req.params.Id
            });                
        }
        return res.status(500).send({
            message: "Error updating photo with id " + req.params.Id
        });
    });
};

// Delete a Photo with the specified Id in the request
exports.delete = (req, res) => {
    Photo.findByIdAndRemove(req.params.Id)
    .then(photo => {
        if(!photo) {
            return res.status(404).send({
                message: "Photo not found with id " + req.params.Id
            });
        }
        res.send({message: "Photo deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Photo not found with id " + req.params.Id
            });                
        }
        return res.status(500).send({
            message: "Could not delete photo with id " + req.params.Id
        });
    });
};