'use strict';

module.exports = {
    options: {
        compress: {
            drop_console: true
        }
    },
    dist:{
        files: {
            '<%= project.temp.src %>/js/script.min.js': ['<%= project.temp.src %>/js/script.js'],
            '<%= project.temp.src %>/js/vendor.min.js': ['<%= project.temp.src %>/js/vendor.js']
        }
    }

};
