module.exports = function (grunt) {
  grunt.initConfig({
    lint: {
      all: ['app/*/*.js', 'lib/*/*.js', '*.js']
    },
    jshint: {
      options: {
        node: true
      }
    }
  });

  grunt.registerTask('default', 'lint');
};