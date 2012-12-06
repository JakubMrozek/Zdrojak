module.exports = function (grunt) {
  grunt.initConfig({
    lint: {
      all: ['controllers/**/*.js', 'models/**/*.js', 'lib/**/*.js', 'test/**/*.js', '*.js']
    },
    jshint: {
      options: {
        node: true,
        camelcase: true,
        es5: true,
        newcap: true,
        quotmark: 'single',
        eqeqeq: true,
        strict: false,
        maxparams: 4,
        maxstatements: 10,
        maxdepth: 3,
        evil: true,
        regexdash: true
        //indent: 2
      }
    }
  });
  grunt.registerTask('default', 'lint');
  
  grunt.registerTask('apiary2js', 'Generate js version of apiary file.', function() {
     var parser  = require('apiary-blueprint-parser');
     var content = grunt.file.read('apiary.apib');
     var blueprint = parser.parse(content);
     var json = JSON.stringify(blueprint.sections, null, 2);
     grunt.file.write('test/frontend/apiary.js', "var apiary = " + json);
  });  
  
};