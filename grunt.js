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
};