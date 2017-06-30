'use strict';

module.exports = {
    all:{
        options: {
            progressive: true,
            optimizationLevel: 3,
            svgoPlugins: [{removeViewBox: false}],
        },
        files: [{
            expand: true,
            cwd:'<%= project.img.src %>',
            src: ['*.{png,jpg,gif,svg}'],
            dest: '<%= project.temp %>/img/'
        }]
    }
};
