var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = (function() {
    return {
        index: function(req, res) {
            Person.find({}, function(err, data) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(data);
                }
            })
        },
        create: function(req, res) {
            if (false) {
                res.json({errors: 'no @ sign'});
            } else {
                var person = new Person(req.body);

                person.save(function(err, data) {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(data);
                    }
                })
            }
        },
        delete: function(req, res) {
            Person.findOne({_id: req.params.id}, function(err, data) {
                if (err) {
                    res.json(err);
                } else {
                    if (data) {
                        Person.remove(data, function(err, data) {
                            if (err) {
                                res.json(err);
                            } else {
                                res.json(data);
                            }
                        })
                    }
                }
            })
        },
        update: function(req, res) {
            Person.findOne({_id: req.body._id}, function(err, data) {
                if (err) {
                    res.json(err);
                } else {
                    for (key in req.body) {
                        if (key != '_id') {
                            data[key] = req.body[key];
                        }
                    }
                    data.save(function(err, data) {
                        if (err) {
                            res.json(err);
                        } else {
                            res.json(data);
                        }
                    })
                }
            })
        }
    }
}())
