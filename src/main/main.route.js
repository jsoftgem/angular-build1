(function () {
    'use strict';

    angular.module('main.route', [])
        .config(MainRoute);

    MainRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function MainRoute($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('main', {
            url: '/',
            templateProvider: ['$templateCache', function ($templateCache) {
                return $templateCache.get('main/main.tpl.html');
            }],
            controller: 'mainCtrl'
        });

    }

})();