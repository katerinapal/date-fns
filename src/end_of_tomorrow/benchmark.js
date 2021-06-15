'use strict';

var _ = require('./');

suite('endOfTomorrow', function () {
  benchmark('date-fns', function () {
    return (0, _.endOfTomorrow)();
  });
});