'use strict';

var test = require('tape');
var foo = require('..');

test('foo', function(t) {
  t.plan(1);
  t.equal(foo(), 42);
});
