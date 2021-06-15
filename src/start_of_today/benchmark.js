'use strict';

var _ = require('./');

suite('startOfToday', function () {
  benchmark('date-fns', function () {
    return (0, _.startOfToday)();
  });
});