"use strict";

var _ = require("./");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

suite('parse', function () {
  benchmark('date-fns', function () {
    return (0, _.parse)('2014-10-25T13:46:20+07:00');
  });

  benchmark('Moment.js', function () {
    return (0, _moment2.default)('2014-10-25T13:46:20+07:00');
  });
});