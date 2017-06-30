'use strict';

module.exports = {
    all: {
        dest: {
            'js': '<%= project.temp %>/js/vendor.js',
            'css': '<%= project.temp %>/css/vendor.css',

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
            'bootstrap': ['<%= project.dist %>/css/bootstrap.css']
        }
    }
};
