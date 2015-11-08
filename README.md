# Angular-build1
Angular-build1 for modular web applications

# Getting started
- To install dependencies run ``` npm install  ```
- [Grunt:](http://gruntjs.com/) We use Grunt as our build system. 
- To install grunt-cli run ``` npm install -g grunt-cli ```

### Configuration
- You can see the ff. variables in Gruntfile.js:
```

// CSS files to be concatenated to vendor.css
var vendorCss = ['bower_components/normalize.css/normalize.css',
    'bower_components/bootstrap/dist/css/bootstrap.css'];
    
// JS files to be concatenated to vendor.js
var vendorJS = ['bower_components/jquery/dist/jquery.js', 'bower_components/angular/angular.js',
    'bower_components/angular-cookies/angular-cookies.js',
    'bower_components/ui-router/release/angular-ui-router.js',
    'bower_component/angular-resource/angular-resource.js',
    'bower_components/bootstrap/dist/js/bootstrap.js',
    'bower_components/lodash/lodash.js'];
    
// Font files to be copied to bin/fonts
var vendorFonts = ['bower_components/bootstrap/fonts/*'];

// CSS files to be concatenated to app.css
var appCss = ['src/**/*.css'];

// JS files to be concatenated to app.css
var appJS = ['src/**/*.js', 'tmp/*.js'];

// HTML to be cached to template.js
var appHtml = ['src/**/*.html'];

// Sass main source file
var sassMain = 'src/styles/main.scss';

// Sass source files
var sassSrc = ['src/**/*.scss'];

// index.html source for HTML Builder
var indexBuildFile = 'html-build/index.html';

// HTML Build section config
var sections = {
    layout: {
        header: 'html-build/sections/header.html',
        content: 'html-build/sections/content.html',
        footer: 'html-build/sections/footer.html'
    }
};
```

### 2 ways to build the project
#### For production
   - All javascript and css files under 'src' folder will be concatenated and compressed to app.js/.css;
   - To run production build ``` grunt build-prod ```
   - Index.html will be created with the ff. output:
  ```
     <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Welcome to Angular Modular Build 1</title>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
            <![endif]-->
            <link type="text/css" rel="stylesheet" href="bin/css/vendor.min.css" />
            <link type="text/css" rel="stylesheet" href="bin/css/app.min.css" />
        </head>
        
        <body>
            <header>
                <div id="header"></div>
            </header>
            <div ng-cloak id="main_content" ui-view></div>
            <footer>
                <div id="footer"></div>
            </footer>
            <script type="text/javascript" src="bin/js/vendor.min.js"></script>
            <script type="text/javascript" src="bin/js/app.min.js"></script>
        </body>
        
        </html>
  ```     
  
#### For development
    - Will watch changes from 'src' folder;
    - All javascript and css files under 'src' folder will be imported directy to index.html;
    - To run development build ``` grunt build-dev ```
    - Index.html will be created with the ff. output:
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Welcome to Angular Modular Build 1</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link type="text/css" rel="stylesheet" href="bower_components/normalize.css/normalize.css" />
    <link type="text/css" rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" />
    <link type="text/css" rel="stylesheet" href="src/sass.css" />
</head>

<body>
    <header>
        <div id="header"></div>
    </header>
    <div ng-cloak id="main_content" ui-view></div>
    <footer>
        <div id="footer"></div>
    </footer>
    <script type="text/javascript" src="bower_components/jquery/dist/jquery.js"></script>
    <script type="text/javascript" src="bower_components/angular/angular.js"></script>
    <script type="text/javascript" src="bower_components/angular-cookies/angular-cookies.js"></script>
    <script type="text/javascript" src="bower_components/ui-router/release/angular-ui-router.js"></script>
    <script type="text/javascript" src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
    <script type="text/javascript" src="src/main-sample.js"></script>
    <script type="text/javascript" src="tmp/templates.js"></script>
</body>

</html>
```
    
