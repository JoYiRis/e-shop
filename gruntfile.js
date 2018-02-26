module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: './build/bundle.js',
                dest: './bundle.min.js'
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src:['src/js/app.js', 'src/js/**／*.js'],
                dest: 'build/bundle.js'
            }
        },
        watch: {

        }
    });

    // Load the plugin for various tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify']);
};