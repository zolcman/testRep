'use strict';

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({

sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'css/newcss.css': 'css/newcss.scss'
            }
        }
    },

 watch: {
    
    css: {
    files: ['css/*.scss'],
    tasks: ['sass'],
    options: {
        spawn: false,
    }
}
  },



    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    clean: {
      test: ['tmp']
    },
    
    concat: {
      dist: {
    src: [
      'js/main.js'
      
    ],
    dest: 'js/production.js'
  }
    },
    uglify: {
    build: {
        src: 'js/main.js',
        dest: 'js/production.min.js'
    }
},
    cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'css',
      src: ['*.css', '!*.min.css'],
      dest: 'css',
      ext: '.min.css'
    }]
  }
},
    
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images',
          src: '**/*.{gif,GIF,jpg,JPG,png,PNG}',
          dest: 'images/new'
        }]
      },
      rename: {
        files: {
          'tmp/rename.jpg': 'test/fixtures/test.jpg'
        }
      }
    },
    nodeunit: {
      tests: ['test/test.js']
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-internal');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('test', [
    'jshint',
    'clean',
    'imagemin',
    'nodeunit',
    'clean'
  ]);

  grunt.registerTask('default', ['test', 'build-contrib']);
  grunt.registerTask('default', ['concat']);
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('default', ['concat', 'uglify']);
 //  grunt.registerTask('default',['watch']);
};