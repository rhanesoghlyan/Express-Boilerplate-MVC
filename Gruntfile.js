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
        'express',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean',
        'sass',
        'concat',
        'uglify',
        'cssmin',
        'imagemin',
        'copy'
    ]);
};
