// Vendor's source files
var destinationFolder = "dist";
var srcFolder = "src";

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
var appCss = [srcFolder + '/**/*.css'];
var appJS = [
    getResource('main/main.module.js'),
    getResource('home/home.module.js'),
    srcFolder + '/**/*.js', 'tmp/*.js'];
var appHtml = [srcFolder + '/**/*.tpl.html'];
var sassMain = srcFolder + '/styles/main.scss';
var indexBuildFile = 'html-build/index.html';

// HTML Build section config
var htmlTemplates = {
    dest: 'index.html',
    appJS: destinationFolder + '/js/app.min.js',
    libJS: destinationFolder + '/js/vendor.min.js',
    appCSS: destinationFolder + '/css/app.min.css',
    libCSS: destinationFolder + '/css/vendor.min.css',
    devLibJS: destinationFolder + '/js/vendor.js',
    devLibCSS: destinationFolder + '/css/vendor.css',
    layout: {
        header: 'html-build/sections/header.html',
        content: 'html-build/sections/content.html',
        footer: 'html-build/sections/footer.html'
    }
};

var otherOptions = {
    fonts: destinationFolder + '/fonts/'
};


function getResource(resource) {
    return srcFolder + '/' + resource;
}

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    grunt.registerTask("build-dev", ['clean', 'copy', 'jshint', 'karma', 'concat:vendor', 'sass:dist', 'concat_css:vendor', 'htmlbuild:dev']);
    grunt.registerTask("build-prod", ['clean:dist', 'copy', 'jshint', 'karma', 'html2js:dist', 'concat:app', 'concat:vendor',
        'uglify', 'sass:dist', 'concat_css:app', 'concat_css:vendor', 'cssmin', 'htmlbuild:prod', 'clean:temp']);
    grunt.registerTask("debug", ['htmlbuild:dev']);

    grunt.initConfig({
        jshint: {
            gruntfile: ['Gruntfile.js'],
            all: ['Gruntfile.js', srcFolder + '/**/*.js']
        },
        karma: {
            options: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        html2js: {
            options: {
                base: '.',
                module: 'main.templates',
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeComments: true
                },
                singleModule: true,
                existingModule: true
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
                dest: destinationFolder + '/js/app.js'
            },
            vendor: {
                src: vendorJS,
                dest: destinationFolder + '/js/vendor.js'
            }
        },
        clean: {
            temp: {
                src: ['tmp']
            },
            dist: {
                src: [destinationFolder]
            }
        },
        uglify: {
            dist: {
                files: [
                    {
                        'dist/js/app.min.js': [destinationFolder + '/js/app.js'],
                        'dist/js/vendor.min.js': [destinationFolder + '/js/vendor.js']
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
                dest: destinationFolder + '/css/app.css'
            },
            vendor: {
                src: vendorCss,
                dest: destinationFolder + '/css/vendor.css'
            }
        },
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: destinationFolder + '/css',
                        src: ['**/*.css'],
                        dest: destinationFolder + '/css',
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
            options: {
                livereload: {
                    host: 'localhost',
                    port: 9000
                }
            },
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['jshint:gruntfile']
            },
            scripts: {
                files: [srcFolder + '/**/*.js'],
                tasks: ["jshint"]
            },
            css: {
                files: [srcFolder + '/**/*.scss'],
                tasks: ['html2js:dist', 'sass:dist']
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true, flatten: true,
                        src: vendorFonts,
                        dest: otherOptions.fonts,
                        filter: 'isFile'
                    }
                ]
            }
        },
        htmlbuild: {
            prod: {
                src: indexBuildFile,
                dest: htmlTemplates.dest,
                options: {
                    beautify: true,
                    scripts: {
                        libs: htmlTemplates.libJS,
                        app: htmlTemplates.appJS
                    },
                    styles: {
                        libs: htmlTemplates.libCSS,
                        app: htmlTemplates.appCSS
                    },
                    sections: htmlTemplates.layout
                }
            },
            dev: {
                src: indexBuildFile,
                dest: htmlTemplates.dest,
                options: {
                    beautify: true,
                    scripts: {
                        libs: htmlTemplates.devLibJS,
                        app: appJS
                    },
                    styles: {
                        libs: htmlTemplates.devLibCSS,
                        app: appCss
                    },
                    sections: htmlTemplates.layout
                }
            }
        }
    })
    ;
};