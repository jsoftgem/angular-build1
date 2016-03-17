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
                    template: '<app-content></app-content>'
                }
            }
        });
    }
})();
