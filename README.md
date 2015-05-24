# npm-boilerplate [![Version](https://img.shields.io/badge/version-v0.1.1-orange.svg?style=flat)](https://github.com/yuanqing/npm-boilerplate/releases) [![Build Status](https://img.shields.io/travis/yuanqing/npm-boilerplate.svg?style=flat)](https://travis-ci.org/yuanqing/npm-boilerplate)

> Barebones boilerplate using [`npm run-script`](https://www.npmjs.org/doc/cli/npm-run-script.html).

## Tooling

- Linting: **[JSHint](http://jshint.com/docs/)**
- Tests: **[Tape](https://github.com/substack/tape)**, **[Karma](http://karma-runner.github.io/)**, **[PhantomJS](http://phantomjs.org/)**
- Code coverage: **[Istanbul](http://gotwarlost.github.io/istanbul/)**
- Benchmarking: **[Matcha](https://github.com/logicalparadox/matcha)**
- Bundling: **[Browserify](http://browserify.org/)**, **[UglifyJS](https://github.com/mishoo/UglifyJS2)**

## Commands

### `npm run lint`

Lint `index.js`, `test/*.js`, `benchmark/*.js`, and `karma.conf.js`.

### `npm test`

Run the tests in `test/`, and write code coverage reports into `coverage/`.

### `npm run test-browser`

Run the tests in `test/` in the browser, and write code coverage reports into `coverage/`.

### `npm run benchmark`

Run the benchmarks in `benchmark/`.

### `npm run dist`

Bundle `index.js` as a standalone module, and write `foo.js` (with source map) and `foo.min.js` (minified) into `dist/`.

### `npm run build`

Run all of the above tasks.

## Changelog

- 0.1.0
  - Initial release

## License

[MIT](https://github.com/yuanqing/npm-boilerplate/blob/master/LICENSE)
