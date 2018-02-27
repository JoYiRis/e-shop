module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: './build/bundle.js',
                dest: './bundle/bundle.min.js'
            }
        },
        babel: {
            option: {
                sourceMap: false,
                presets: ['babel-preset-env']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: '**/*.js',
                    dest: 'dist'
                }]
            }
        },
        copy: {
            main: {
                expand: true,
                cwd:'src',
                src: ['**'],
                dest: 'dist/'
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src:['dist/js/**/*.js'],
                dest: 'build/bundle.js'
            }
        },
        compass: {
            config: 'config.rb'
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({browsers: ['last 2 version']})
                ]
            },
            dist: {
                src: 'dist/css/**/*.css'
            }
        },
        cssmin: {
            main: {
                files: [{
                    'build/main.css': ['dist/css/**/*.css']
                }]
            }
        },
        watch: {
            js: {
                files: ['src/js/app.js', 'src/js/**/*.js'],
                tasks: ['copy', 'concat', 'uglify'],
                options: {
                    spawn: false
                }
            }
        },
        clean: {
            dist: ['dist/css/**/*.css', 'dist/js/**/*.js', 'dist/view/**/*.html'],
            build: ['build/**'],
            bundle: ['bundle/**']
        }
    });

    // css
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // js
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    /*
     * image
     *
     * to do here
     */

    // watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    // clean
    grunt.loadNpmTasks('grunt-contrib-clean');

    // register task(s).
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', [
        'compass',
        'postcss',
        'cssmin',
        'copy',
        'babel',
        'concat',
        'uglify'
    ]);
};