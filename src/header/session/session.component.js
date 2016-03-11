(function () {
    'use strict';
    angular.module('main.header')
        .component('headerSession', HeaderSession);

    HeaderSession.$inject = [];

    function HeaderSession() {
        return {
            templateUrl: 'src/header/session/session-dropdown.html',
            controller: 'headerSessionCtrl',
            controllerAs: 'sessionHeader'
        };
    }
})();
