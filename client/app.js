var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'partials/index.html',
        controller: 'MainController'
    })
    .when('/new',{
        templateUrl: 'partials/new.html',
         controller: 'MainController'
    })
    .when('/new_question',{
        templateUrl: 'partials/question.html',
        controller: 'MainController'
    })
    .when('/lets_play',{
        templateUrl: 'partials/play.html',
        controller: 'MainController'
    })
    .when('/logout',{
        templateUrl: 'partials/new.html',
        controller: 'MainController'
    })
    .otherwise({
        redirectTo: '/new'
    });
});
