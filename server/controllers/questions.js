var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function() {
    return {
        index: function(req, res) {
            Question.find({}, function(err, data) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(data);
                }
            })
        },
        create: function(req, res) {
            var question = new Question(req.body);
            question.save(function(err, data) {
                if (err) {
                    res.json(err);
                } else {
                    res.json({success:"Question was added successfully!"});
                }
            })

        },
    }
}())
