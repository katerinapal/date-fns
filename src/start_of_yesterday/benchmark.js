'use strict';

var _ = require('./');

suite('startOfYesterday', function () {
  benchmark('date-fns', function () {
    return (0, _.startOfYesterday)();
  });
});