var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');

module.exports = (function() {
    return {
        index: function(req, res) {
            Answer.find({}, function(err, data) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(data);
                }
            })
        },
        create: function(req, res) {
            var answer = new Answer(req.body);
            answer.save(function(err, data) {
                if (err) {
                    res.json(err);
                } else {
                    res.json({success:"That was great, USERNAME! Your Score is SCORE/3 (PERCENT%)."});
                }
            })

        },
    }
}())
