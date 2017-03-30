app.controller('MainController', function($scope, QuestionFactory, AnswerFactory, $location) {
    QuestionFactory.index(function(data) {
        $scope.questions = data;
    });
    AnswerFactory.index(function(data) {
        $scope.answers = data;
    });

    $scope.submitAnswers = function() {
        $scope.errors = {};
        if (!$scope.new_answer){
            $scope.new_answer = {}
        }
        if (!$scope.new_answer.question1){
            $scope.errors.q1 = "You must answer question 1!";
        };
        if (!$scope.new_answer.question2){
            $scope.errors.q2 = "You must answer question 2!";
        };
        if (!$scope.new_answer.question3){
            $scope.errors.q3 = "You must answer question 3!";
        };
        var percentage = 0;
        var sum = Number($scope.new_answer.question1)+Number($scope.new_answer.question2)+Number($scope.new_answer.question3);
        if (sum == 3){
            var percentage = 100;
        } else if (sum == 2){
            var percentage = 66.7;
        } else if (sum == 1){
            var percentage = 33.3;
        }
        var new_score = {
            name: $scope.username,
            score: sum,
            percentage: percentage
        };
        AnswerFactory.create(new_score, function(data) {
            if (data.errors) {
                $scope.errors = data.errors;
            } else {
                AnswerFactory.index(function(data) {
                    $scope.answers = data;
                    $scope.new_answer = {};
                    $location.url('/');
                });
            }
        })
    }
    $scope.createScore = function() {
        $scope.errors = {};
        var percentage = 0;
        if ($scope.score.score == 3){
            var percentage = 100;
        } else if ($scope.score.score == 2){
            var percentage = 66.7;
        } else if ($scope.score.score == 1){
            var percentage = 33.3;
        }
        var new_score = {
            name: $scope.username,
            score: $scope.score.score,
            percentage: percentage
        };
        AnswerFactory.create(new_score, function(data) {
            if (data.errors) {
                $scope.errors = data.errors;
            } else {
                AnswerFactory.index(function(data) {
                    $scope.answers = data;
                    $scope.score = {};
                    $location.url('/');
                });
            }
        })
    }

    $scope.createQuestion = function() {
        $scope.errors = {};
        $scope.success = {};
        QuestionFactory.create($scope.new_question, function(data) {
            if (data.errors) {
                $scope.errors = data.errors;
            } else {
                QuestionFactory.index(function(data) {
                    $scope.questions = data;
                    $scope.new_question = {};
                    $scope.success_msg = 'Question added successfully!';
                    $location.url('/');
                });
            }
        })
    }

    $scope.storeUser = function() {
        QuestionFactory.user = $scope.user;
        $location.url('/');
    }
    $scope.username = QuestionFactory.getUser();
})
