(function () {
    'use strict';
    angular.module('app.content')
        .component('appContent', {
            templateUrl: 'src/content/content.tpl.html',
            controller: 'AppContentController',
            controllerAs: 'content'
        });
})();
