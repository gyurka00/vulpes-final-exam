'use strict';

var test = require('tape');
var wrietObject = require('./final-exam');

test('existance', function(t) {
  t.equal(typeof wrietObject, 'function');
  t.end();
});
