(function () {
    'use strict';
    angular.module('home.route', [])
        .config(HomeRoute);

    HomeRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function HomeRoute($stateProvider) {
        $stateProvider.state('main.home', {
            url: 'home',
            views: {
                'content': {
                    templateProvider: ['$templateCache', function ($templateCache) {
                        return $templateCache.get('home/home.tpl.html');
                    }],
                    controller: 'homeCtrl'
                }
            }
        });
    }

})();