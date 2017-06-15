'use strict';

module.exports = {
    dist: {
        files: [{
            src: [
                '<%= project.temp.src %>'
            ]
        }]
    },
    tmp: '<%= project.temp.src %>'
};
