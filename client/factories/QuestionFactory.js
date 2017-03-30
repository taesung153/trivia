app.factory('QuestionFactory', function($http) {
    var factory = {user:""};

    factory.index = function(callback) {
        $http.get('/questions').then(function(response) {
          callback(response.data);
        })
    }
    factory.create = function(new_question, callback) {
        $http.post('/questions', new_question).then(function(response) {
          callback(response.data);
        })
    }
    factory.getUser = function(){
        if (factory.user){
            return factory.user;
        }
    }

    return factory;
})
