module.exports = function(grunt) {

  grunt.initConfig({

    concurrent: {

      main: ['nodemon', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    },
    nodemon: {

      main: {

        file: 'dist/server/index.js',
        options: {

          ignoredFiles: ['node_modules/**', 'Gruntfile.js']
        }
      }
    },
    stylus: {
      compile: {
        files: {
          'public/css/main.css': ['stylus/**/*.styl']
        },
        options: {
          compress: false
        }
      }
    },
    watch: {

      options: {

        interval: 3000
      },
      gruntfile: {
        files: 'Gruntfile.js'
      },
      main: {
        files: ['index.js'],
        options: {
          livereload: true
        }
      },
      hbs: {
        files: ['views/**/*.hbs'],
        options: {
          livereload: true
        }
      },
      stylus: {
        files: ['stylus/**/*.styl'],
        tasks: 'stylus',
        /*options: {
          atBegin: true
        }*/
      },
      css: {
        files: ['public/css/**/*.css'],
        options: {
          livereload: true
        }
      },
      es6: {
        files: ['lib/es6/**/*.js'],
        tasks: 'transpile',
        /*options: {
          atBegin: true
        }*/
      }
    },
    transpile: {
      server: {
        type: "cjs",
        files: [{
          expand: true,
          cwd: 'lib/es6',
          src: ['server/*.js'],
          dest: 'dist/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-es6-module-transpiler');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', ['concurrent:main']);
};