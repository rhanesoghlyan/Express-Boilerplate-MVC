'use strict';

module.exports = {
    all: {
        dest: {
            'js': '<%= project.temp.src %>/js/vendor.js',
            'css': '<%= project.temp.src %>/css/vendor.css',

            include: [
                'jquery',
                'bootstrap',
                'bootstrap-sass'
            ],
        },
        bowerOptions: {
            relative: false
        },
        mainFiles: {
            'bootstrap': ['dist/css/bootstrap.css']
        }
    }
};

