'use strict';

module.exports = {
    options: {
        compress: {
            drop_console: true
        }
    },
    dist:{
        files: {
            '<%= project.temp %>/js/script.min.js': ['<%= project.temp %>/js/script.js'],
            '<%= project.temp %>/js/vendor.min.js': ['<%= project.temp %>/js/vendor.js']
        }
    }

};
