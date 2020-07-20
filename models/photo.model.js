const mongoose = require('mongoose');

const PhotoSchema = mongoose.Schema({
    word: {type:String,required: 'This field is required!'},
    percentage: {type:String,required: 'This field is required!'},
    image:{type:String,required: 'This field is required!'} // image in based64 format save
}, {
    timestamps: true
});

module.exports = mongoose.model('Photo', PhotoSchema);