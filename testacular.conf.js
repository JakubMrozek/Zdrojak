// Testacular configuration
// Generated on Wed Nov 21 2012 09:51:48 GMT+0100 (Střední Evropa (běžný čas))


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  
  'public/lib/jquery-1.8.3.min.js',
  'public/lib/angular/angular.js',
  'public/lib/angular/angular-*.js',
  'test/frontend/lib/angular/angular-mocks.js',
  'public/js/**/*.js',
  'test/frontend/apiary.js',
  'test/frontend/unit/**/*.js'
];


// list of files to exclude
exclude = [
  
];

// generate js files from apiary
preprocessors = {
  'apiary.apib': 'apiary2js'
};


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 8060;


// cli runner port
runnerPort = 7100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 5000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
