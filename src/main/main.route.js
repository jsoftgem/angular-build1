(function () {
    'use strict';

    angular.module('main.module')
        .config(MainRoute);

    MainRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function MainRoute($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/app');
        $stateProvider.state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'src/main/main.tpl.html'
        });

    }

})();