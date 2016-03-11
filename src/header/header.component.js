(function () {
    'use strict';
    angular.module('main.header')
        .component('appHeader', AppHeader);

    AppHeader.$inject = [];

    function AppHeader() {
        return {
            templateUrl: 'src/header/header.tpl.html',
            controller: 'headerCtrl',
            controllerAs: 'appHeader'
        };
    }

})();
