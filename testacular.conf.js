basePath = './';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'public/lib/angular/angular.js',
  'public/lib/angular/angular-*.js',
  'test/frontend/lib/angular/angular-mocks.js',
  'public/js/*.js',
  'test/frontend/unit/*.js'  
];

autoWatch = true;

browsers = ['Chrome'];