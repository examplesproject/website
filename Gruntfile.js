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
          watchedFolders: ['dist/server'],
          watchedExtensions: ['js']
        }
      }
    },
    watch: {

      options: {

        interval: 3000
      },
      main: {
        files: ['tmp/index.js'],
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
      es6_server: {
          files: ['js/es6/server/**/*.js'],
          tasks: 'transpile:server'
      },
      es6_client: {
        files: ['js/es6/client/**/*.js'],
        tasks: 'transpile:client'
      },
      requirejs: {
        files: ['tmp/**/*.js'],
        tasks: 'requirejs'
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
    transpile: {
      server: {
        type: "cjs",
        files: [{
          expand: true,
          cwd: 'js/es6/',
          src: ['server/**/*.js'],
          dest: 'dist/'
        }]
      },
      client: {
        type: "amd",
        files: [{
          expand: true,
          cwd: 'js/es6/client/',
          src: '**/*.js',
          dest: 'tmp/'
        }]
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: 'tmp',
          optimize: 'uglify2',
          name: '../public/js/ext/almond/0.2.6/almond',
          include: 'index',
          out: 'public/js/index.js',
          insertRequire: ['index']
        }
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
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task.
  grunt.registerTask('default', ['concurrent:main']);
};