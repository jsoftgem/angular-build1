(function () {
    'use strict';
    angular.module('main.header')
        .controller('headerSessionCtrl', HeaderSessionController);

    HeaderSessionController.$inject = [];

    function HeaderSessionController() {
        var sessionHeader = this;
        return sessionHeader;
    }

})();
