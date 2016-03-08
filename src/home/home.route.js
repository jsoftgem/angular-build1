(function () {
    'use strict';
    angular.module('home.module')
        .config(HomeRoute);

    HomeRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function HomeRoute($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            abstract:true,
            templateUrl: 'src/home/home.tpl.html',
            controller: 'homeCtrl'
        });
    }

})();