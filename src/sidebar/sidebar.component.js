(function () {
    'use strict';
    angular.module('app.sidebar')
        .component('appSidebar', {
            templateUrl: 'src/sidebar/sidebar.tpl.html',
            bindings: {
                model: '='
            }
        });
})();
