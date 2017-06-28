'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'grunt-contrib-*']});

    let config = require('load-grunt-configs')(grunt, {
        config: {
            src: 'grunt/config/*.js'
        }
    });

    grunt.initConfig(config);

    grunt.registerTask('serve', [
        'sass',
        'express',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean',
        'jshint',
        'concat',
        'bower_concat',
        'uglify',
        'sass',
        'cssmin',
        'copy',
        'rev',
        'usemin',
        'imagemin'
    ]);
};
