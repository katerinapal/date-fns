'use strict';

var _ = require('./');

suite('endOfToday', function () {
  benchmark('date-fns', function () {
    return (0, _.endOfToday)();
  });
});