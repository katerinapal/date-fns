"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('cs locale', function () {
  it('exports distanceInWords object', function () {
    (0, _powerAssert2.default)(_typeof(_.indexjs.distanceInWords) === 'object');
  });

  it('exports format object', function () {
    (0, _powerAssert2.default)(_typeof(_.indexjs.format) === 'object');
  });
});