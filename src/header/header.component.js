(function () {
    'use strict';
    angular.module('app.header').component('appHeader', {
        templateUrl: 'src/header/header.tpl.html',
        controller: 'AppHeaderController',
        controllerAs: 'header',
        bindings: {
            model: '='
        }
    });
})();
