module.exports = function(grunt) {

  'use strict';

  require('load-grunt-tasks')(grunt);
  //pkg: grunt.file.readJSON('package.json');
  grunt.initConfig({
    // Tasks that Grunt should execute
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      //
      files: ["project/scss/style.scss", "project/css/style.css"],
      tasks: ["sass", "cssmin"]
    },
    sass: { // Task
      dist: {                            // Target
        files: {                         // Dictionary of files
        'project/css/style.css': 'project/scss/style.scss',       // 'destination': 'source'
        }
      }
    },
    cssmin: {
      options: {
        sourceMap: true
      },
      target: {
        files: {
          'project/css/style.min.css': 'project/css/style.css'
        }
      }
    }
  });

  grunt.registerTask('default', ['watch']);
};
