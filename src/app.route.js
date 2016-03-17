(function () {
    'use strict';
    angular.module('app')
        .config(AppRoute);
    AppRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function AppRoute($state, $urlRouter) {
        $urlRouter.otherwise('/');
        $state.state('app', {
            url: '/',
            views: {
                'content-view': {
                    template: '<app-content model="app.contentView"></app-content>',
                    controller: 'AppController',
                    controllerAs: 'app'
                },
                'header-view': {
                    template: '<app-header model="app.headerView"></app-header>',
                    controller: 'AppController',
                    controllerAs: 'app'
                }
            }

        });
    }
})();
