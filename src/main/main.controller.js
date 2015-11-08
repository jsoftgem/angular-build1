(function () {
    'use strict';

    angular.module('main.controller', [])
        .controller('mainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$state'];

    function MainCtrl($scope, $state) {
        $state.go('main.home');
    }


})();
