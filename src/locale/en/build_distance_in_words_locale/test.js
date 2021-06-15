"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _ = require("./");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('en locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    (0, _powerAssert2.default)(_typeof((0, _.buildDistanceInWordsLocale)()) === 'object');
  });

  it('localize property is a function', function () {
    (0, _powerAssert2.default)(typeof (0, _.buildDistanceInWordsLocale)().localize === 'function');
  });

  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 1) === 'less than a second');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 2) === 'less than 2 seconds');
      });
    });
  });

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 1) === '1 second');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 2) === '2 seconds');
      });
    });
  });

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute') === 'half a minute');
    });

    it('ignores the second argument', function () {
      (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 123) === 'half a minute');
    });
  });

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1) === 'less than a minute');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 2) === 'less than 2 minutes');
      });
    });
  });

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 1) === '1 minute');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 2) === '2 minutes');
      });
    });
  });

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 1) === 'about 1 hour');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 2) === 'about 2 hours');
      });
    });
  });

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 1) === '1 hour');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 2) === '2 hours');
      });
    });
  });

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 1) === '1 day');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 2) === '2 days');
      });
    });
  });

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 1) === 'about 1 month');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 2) === 'about 2 months');
      });
    });
  });

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 1) === '1 month');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 2) === '2 months');
      });
    });
  });

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 1) === 'about 1 year');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 2) === 'about 2 years');
      });
    });
  });

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xYears', 1) === '1 year');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xYears', 2) === '2 years');
      });
    });
  });

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 1) === 'over 1 year');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 2) === 'over 2 years');
      });
    });
  });

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 1) === 'almost 1 year');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 2) === 'almost 2 years');
      });
    });
  });

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      });
      (0, _powerAssert2.default)(result === 'about 1 year ago');
    });
  });

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = (0, _.buildDistanceInWordsLocale)().localize('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      });
      (0, _powerAssert2.default)(result === 'in half a minute');
    });
  });
});