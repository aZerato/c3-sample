module.exports = function(grunt) {
    /**
    * tasks configurations.
    */
    var config = require('./grunt_tasks/config');

    var clean = require('./grunt_tasks/clean');
    var copy = require('./grunt_tasks/copy');

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      config: config,
      clean: clean,
      copy: copy,
    });

    /**
    * load tasks.
    */
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    /*
    * register tasks
    */
    grunt.registerTask('run', [
      'clean:ressources',
      'copy:ressources',
    ]);
};