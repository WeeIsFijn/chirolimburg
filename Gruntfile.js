(function () {
  'use strict';

  module.exports = function (grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      frontend_src: './frontend_client',
      frontend_dev: './frontend_client_dev',
      frontend_dist: './frontend_client_dist',
      dashboard_src: './frontend_dash',
      dashboard_dev: './frontend_dash_dev',
      dashboard_dist: './frontend_dash_dist',
      bootstrap_dist: './frontend_client/bower_components/bootstrap/dist',

      // see https://github.com/gruntjs/grunt-contrib-connect
      connect: {
        dev: {
          options: {
            port: 8090,
            base: ['<%= frontend_dev %>/'],
            livereload: true,
            hostname: '0.0.0.0',
            //keepalive: true,
            open: true
          }
        },
        dashboard: {
          options: {
            port: 8090,
            base: ['<%= dashboard_dev %>/'],
            livereload: true,
            hostname: '0.0.0.0',
            //keepalive: true,
            open: true
          }
        },
      },

      // see https://github.com/gruntjs/grunt-contrib-watch
      watch: {
        livereload: {
          files: [
            './Gruntfile.js',
            '<%= frontend_src %>/*.html',
            '<%= frontend_src %>/js/**/*.js',
            '<%= frontend_src %>/app/**/*.js',
            '<%= frontend_src %>/app/**/*.html',
            '<%= frontend_src %>/css/**/*.css',
            '<%= frontend_src %>/less/**/*.less'
          ],
          tasks: ['copy:dev', 'less:dev'],
          options: {
            livereload: true
          }
        },
        dashboard: {
          files: [
            './Gruntfile.js',
            '<%= dashboard_src %>/*.html',
            '<%= dashboard_src %>/js/**/*.js',
            '<%= dashboard_src %>/app/**/*.js',
            '<%= dashboard_src %>/app/**/*.html',
            '<%= dashboard_src %>/css/**/*.css',
            '<%= dashboard_src %>/less/**/*.less'
          ],
          tasks: ['copy:dashboard', 'less:dashboard'],
          options: {
            livereload: true
          }
        }
      },

      // see https://github.com/gruntjs/grunt-contrib-less
      less: {
        dev: {
          options: {
            paths: ['<%= frontend_src %>/less/']
          },
          files: {
            "<%= frontend_dev %>/css/main.css": "<%= frontend_src %>/less/main.less",
            "<%= frontend_dev %>/css/subscribe.css": "<%= frontend_src %>/less/subscribe.less"
          }
        },
        dashboard: {
          options: {
            paths: ['<%= dashboard_src %>/less/']
          },
          files: {
            "<%= dashboard_dev %>/css/main.css": "<%= dashboard_src %>/less/main.less"
          }
        }
      },

      // see https://github.com/gruntjs/grunt-contrib-copy
      copy: {
        bootstrapDev: {
          files: [
            {expand: true, cwd: '<%= bootstrap_dist %>/css', src: ['**.css'], dest: '<%= frontend_dev %>/css'}
          ]
        },
        bootstrapDash: {
          files: [
            {expand: true, cwd: '<%= bootstrap_dist %>/css', src: ['**.css'], dest: '<%= dashboard_dev %>/css'}
          ]
        },
        dev: {
          files: [
            {expand: true, cwd: '<%= frontend_src %>/', src: ['**.html'], dest: '<%= frontend_dev %>/'},
            {expand: true, cwd: '<%= frontend_src %>/', src: ['**/*.html'], dest: '<%= frontend_dev %>/'},
            {expand: true, cwd: '<%= frontend_src %>/', src: ['**/*.js'], dest: '<%= frontend_dev %>/'},
            {expand: true, cwd: '<%= frontend_src %>/', src: ['**/*.css'], dest: '<%= frontend_dev %>/'},
            {expand: true, cwd: '<%= frontend_src %>/', src: ['fonts/**'], dest: '<%= frontend_dev %>/'},
            {expand: true, cwd: '<%= frontend_src %>/', src: ['img/**'], dest: '<%= frontend_dev %>/'},
            {expand: true, cwd: '<%= frontend_src %>/', src: ['css/**'], dest: '<%= frontend_dev %>/'},
          ],
        },
        dashboard: {
          files: [
            {expand: true, cwd: '<%= dashboard_src %>/', src: ['**.html'], dest: '<%= dashboard_dev %>/'},
            {expand: true, cwd: '<%= dashboard_src %>/', src: ['**/*.html'], dest: '<%= dashboard_dev %>/'},
            {expand: true, cwd: '<%= dashboard_src %>/', src: ['**/*.js'], dest: '<%= dashboard_dev %>/'},
            {expand: true, cwd: '<%= dashboard_src %>/', src: ['fonts/**'], dest: '<%= dashboard_dev %>/'},
            {expand: true, cwd: '<%= dashboard_src %>/', src: ['img/**'], dest: '<%= dashboard_dev %>/'},
            {expand: true, cwd: '<%= dashboard_src %>/', src: ['css/**'], dest: '<%= dashboard_dev %>/'},
          ],
        },
      },

      // see https://github.com/gruntjs/grunt-contrib-clean
      clean: ['<%= frontend_dev %>', '<%= frontend_dist %>', '<%= dashboard_dev %>', '<%= dashboard_dist %>']

    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['copy:dev', 'less:dev', 'connect:dev', 'watch:livereload']);
    grunt.registerTask('dash', ['copy:dashboard', 'less:dashboard', 'connect:dashboard', 'watch:dashboard']);

  };
})();
