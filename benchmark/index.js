/* globals suite, set, bench */
'use strict';

var foo = require('..');

suite('foo', function() {

  set('iterations', 100);

  bench('foo', function() {
    foo();
  });

});
