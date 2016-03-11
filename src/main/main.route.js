(function () {
    'use strict';

    angular.module('main.module')
        .config(MainRoute);

    MainRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function MainRoute($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/app');
        $stateProvider.state('app', {
            url: '/app',
            views: {
                'header-view': {
                    templateUrl: 'src/header/header.tpl.html'
                },
                'content-view': {},
                'sidebar-view': {}
            }
        });
    }

})();