# npm-boilerplate [![Build Status](https://img.shields.io/travis/yuanqing/npm-boilerplate.svg?style=flat)](https://travis-ci.org/yuanqing/npm-boilerplate)

> Barebones boilerplate using [`npm scripts`](https://www.npmjs.org/doc/cli/npm-run-script.html).

## Commands

### `npm run lint`

Lint `benchmark.js`, `index.js`, and `test.js` with [JSHint](http://jshint.com/docs/).

### `npm test`

Run the [Jasmine](http://jasmine.github.io/2.0/introduction.html) tests in `test.js`.

### `npm run cover`

Run the Jasmine tests in `test.js`, and write code coverage reports generated by [Istanbul](http://gotwarlost.github.io/istanbul/) into `coverage/`.

### `npm run bench`

Run the [Matcha](https://github.com/logicalparadox/matcha) benchmarks in `benchmark.js`.

### `npm run build`

Run all of the above tasks.
