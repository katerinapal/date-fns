'use strict';

var _ = require('./');

suite('endOfYesterday', function () {
  benchmark('date-fns', function () {
    return (0, _.endOfYesterday)();
  });
});