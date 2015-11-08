// Vendor's source files
var vendorCss = ['bower_components/normalize.css/normalize.css',
    'bower_components/bootstrap/dist/css/bootstrap.css'];

var vendorJS = ['bower_components/jquery/dist/jquery.js', 'bower_components/angular/angular.js',
    'bower_components/angular-cookies/angular-cookies.js',
    'bower_components/ui-router/release/angular-ui-router.js',
    'bower_component/angular-resource/angular-resource.js',
    'bower_components/bootstrap/dist/js/bootstrap.js',
    'bower_components/lodash/lodash.js'];

var vendorFonts = ['bower_components/bootstrap/fonts/*'];

// Application's source files
var appCss = ['src/**/*.css'];
var appJS = ['src/**/*.js', 'tmp/*.js'];
var appHtml = ['src/**/*.html'];
var sassMain = 'src/styles/main.scss';
var indexBuildFile = 'html-build/index.html';

// HTML Build section config
var sections = {
    layout: {
        header: 'html-build/sections/header.html',
        content: 'html-build/sections/content.html',
        footer: 'html-build/sections/footer.html'
    }
};
module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js']
        },
        karma: {
            options: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        html2js: {
            options: {
                base: 'src/',
                module: 'build.templates',
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            },
            dist: {
                src: appHtml,
                dest: 'tmp/templates.js'
            }
        },
        concat: {
            options: {
                separator: '\n'
            },
            app: {
                src: appJS,
                dest: 'bin/js/app.js'
            },
            vendor: {
                src: vendorJS,
                dest: 'bin/js/vendor.js'
            }
        },
        clean: {
            temp: {
                src: ['tmp']
            }
        },
        uglify: {
            dist: {
                files: [
                    {
                        'bin/js/app.min.js': ['bin/js/app.js'],
                        'bin/js/vendor.min.js': ['bin/js/vendor.js']
                    }
                ],
                options: {
                    mangle: false
                }
            }
        },
        concat_css: {
            options: {},
            app: {
                src: appCss,
                dest: 'bin/css/app.css'
            },
            vendor: {
                src: vendorCss,
                dest: 'bin/css/vendor.css'
            }
        },
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: 'bin/css',
                        src: ['**/*.css'],
                        dest: 'bin/css',
                        ext: '.min.css'
                    }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'src/sass.css': sassMain
                }
            }
        },
        watch: {
            scripts: {
                files: 'src/**/*',
                tasks: ["jshint", 'html2js:dist', 'concat:app', 'concat:vendor', 'sass:dist', 'concat_css:app', 'concat_css:vendor', 'htmlbuild:dev']
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true, flatten: true,
                        src: vendorFonts,
                        dest: 'bin/fonts/',
                        filter: 'isFile'
                    }
                ]
            }
        },
        htmlbuild: {
            prod: {
                src: indexBuildFile,
                dest: 'index.html',
                options: {
                    beautify: true,
                    scripts: {
                        libs: 'bin/js/vendor.min.js',
                        app: 'bin/js/app.min.js'
                    },
                    styles: {
                        libs: 'bin/css/vendor.min.css',
                        app: 'bin/css/app.min.css'
                    },
                    sections: sections
                }
            },
            dev: {
                src: indexBuildFile,
                dest: 'index.html',
                options: {
                    beautify: true,
                    scripts: {
                        libs: vendorJS,
                        app: appJS
                    },
                    styles: {
                        libs: vendorCss,
                        app: appCss
                    },
                    sections: sections
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-html-build');

    grunt.registerTask("build-dev", ["jshint", 'html2js:dist', 'concat:app', 'sass:dist', 'concat_css:app', 'htmlbuild:dev', 'watch']);

    grunt.registerTask("build-prod", ["jshint", 'karma', 'html2js:dist', 'concat:app', 'concat:vendor', 'uglify', 'sass:dist', 'concat_css:app', 'concat_css:vendor', 'cssmin', 'htmlbuild:prod', 'clean:temp']);

};