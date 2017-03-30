app.factory('AnswerFactory', function($http) {
    var factory = {};

    factory.index = function(callback) {
        $http.get('/answers').then(function(response) {
          callback(response.data);
        })
    }
    factory.create = function(new_answer, callback) {
        $http.post('/answers', new_answer).then(function(response) {
          callback(response.data);
        })
    }

    return factory;
})
