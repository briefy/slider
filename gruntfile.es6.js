const path = require('path');
const fs = require('fs');

module.exports = (grunt) => {
  grunt.initConfig({
    webpack: {
      options: {
        cache: true,
        context: path.join(__dirname, 'scripts'),
        entry: ['./slide.js'],
        output: {
          filename: '[name].bundle.js',
          path: path.join(__dirname, 'dist/js'),
          publicPath: '/js/'
        },
        module: {
          loaders: [{
            test: /\.es6.js$/,
            include: [
              path.resolve(__dirname, 'scripts')
            ],
            loader: 'babel-loader'
          }]
        }
      },
      build: {

      }
    },
    'webpack-dev-server': {
      options: {
        webpack: {

        }
      },
      start: {
        webpack: {

        }
      }
    }
  });

  // load tasks automatically
  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies',
    pattern: ['grunt-*', 'time-grunt']
  });

  grunt.registerTask('default', ['webpack']);
};