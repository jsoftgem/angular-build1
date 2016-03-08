// Karma configuration
// Generated on Fri Oct 02 2015 14:38:14 GMT+0800 (Taipei Standard Time)

module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        // list of files / patterns to load in the browser
        files: [
            'bower_components/angular-mocks/angular-mocks.js',
            'src/**/*'
        ],
        // list of files to exclude
        exclude: ['src/**/*.css', 'src/**/*.scss'],
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.js': ['coverage'],
            'src/**/*.html': ['ng-html2js']
        },
        ngHtml2JsPreprocessor: {
            stripPrefix: 'src/'
        },
        reporters: ['progress', 'coverage'],
        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        browsers: ['PhantomJS'],
        phantomjsLauncher: {
            cmd: {
                win32: path.join(__dirname, 'src/test/resources/phantomjs/phantomjs.exe')
            }
        },
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher-nonet',
            'karma-ng-html2js-preprocessor',
            'karma-coverage'
        ],
        coverageReporter: {
            dir: 'target/site/karma-coverage/',
            reporters: [
                {type: 'cobertura', subdir: 'cobertura'},
                {type: 'html', subdir: 'html'}
            ]
        },
        singleRun: true,
        browserNoActivityTimeout: 60000
    });
};
