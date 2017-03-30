var mongoose = require('mongoose');

var PersonSchema = mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
}, {timestamps: true});

mongoose.model('Person', PersonSchema);
