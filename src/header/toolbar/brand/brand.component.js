(function () {
    'use strict';
    angular.module('app.header').component('brand', {
        templateUrl: 'src/header/toolbar/brand/brand.tpl.html',
        controller: 'HeaderBrandController',
        controllerAs: 'brand',
        bindings: {
            title: '<'
        }
    });
})();
