module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['browserify', 'tap'],
    browsers: ['PhantomJS'],
    plugins: [
      'browserify-istanbul',
      'karma-browserify',
      'karma-coverage',
      'karma-phantomjs-launcher',
      'karma-tap',
      'karma-tape-reporter'
    ],
    reporters: [
      'coverage',
      'tape'
    ],
    coverageReporter: {
      dir: 'coverage/',
      subdir: '.',
      reporters: [
        { type: 'lcov' },
        { type: 'text' }
      ]
    },
    preprocessors: {
      'test/*.js': ['browserify']
    },
    browserify: {
      transform: [
        [
          'browserify-istanbul',
          {
            ignore: ['**/node_modules/**', '**/test/**'],
            defaultIgnore: true
          }
        ]
      ]
    },
    files: [
      'test/*.js',
      {
        pattern: 'test/fixtures/*.html',
        included: false,
        served: true,
        watched: false
      }
    ]
  });
};
