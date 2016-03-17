(function () {
    'use strict';
    angular.module('app.content')
        .component('appContent', AppContent);

    function AppContent() {
        return {
            templateUrl: 'src/content/content.tpl.html',
            controller: 'AppContentController',
            controllerAs: 'content'
        };
    }
})();
