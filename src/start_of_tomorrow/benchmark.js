'use strict';

var _ = require('./');

suite('startOfTomorrow', function () {
  benchmark('date-fns', function () {
    return (0, _.startOfTomorrow)();
  });
});