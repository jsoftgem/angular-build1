(function () {
    'use strict';
    angular.module('app.content')
        .directive('sidebarToggle', SidebarToggle);

    function SidebarToggle() {
        return {
            restrict: 'E',
            templateUrl: 'src/content/sidebar-toggle/sidebar-toggle.html',
            link: function (scope, element, attr) {

            }
        };
    }
})();
