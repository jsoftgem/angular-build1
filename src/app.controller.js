(function () {
    'use strict';
    angular.module('app').controller('AppController', AppController);

    function AppController() {
        var app = this;
        app.sidebarView = {};
        app.contentView = {};
        app.headerView = {};
        app.headerView.title = 'Angular Build1';
        return app;
    }

})();