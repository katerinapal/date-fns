"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// @flow
/* eslint-env mocha */

var assert = _powerAssert2.default;
var buildDistanceInWordsLocale = _2.default;

describe('da locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    assert(_typeof(buildDistanceInWordsLocale()) === 'object');
  });

  it('localize property is a function', function () {
    assert(typeof buildDistanceInWordsLocale().localize === 'function');
  });

  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXSeconds', 1) === 'mindre end et sekund');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXSeconds', 2) === 'mindre end 2 sekunder');
      });
    });
  });

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xSeconds', 1) === '1 sekund');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xSeconds', 2) === '2 sekunder');
      });
    });
  });

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      assert(buildDistanceInWordsLocale().localize('halfAMinute') === 'et halvt minut');
    });

    it('ignores the second argument', function () {
      assert(buildDistanceInWordsLocale().localize('halfAMinute', 123) === 'et halvt minut');
    });
  });

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXMinutes', 1) === 'mindre end et minut');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('lessThanXMinutes', 2) === 'mindre end 2 minutter');
      });
    });
  });

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMinutes', 1) === '1 minut');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMinutes', 2) === '2 minutter');
      });
    });
  });

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXHours', 1) === 'cirka 1 time');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXHours', 2) === 'cirka 2 timer');
      });
    });
  });

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xHours', 1) === '1 time');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xHours', 2) === '2 timer');
      });
    });
  });

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xDays', 1) === '1 dag');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xDays', 2) === '2 dage');
      });
    });
  });

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXMonths', 1) === 'cirka 1 måned');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXMonths', 2) === 'cirka 2 måneder');
      });
    });
  });

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMonths', 1) === '1 måned');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xMonths', 2) === '2 måneder');
      });
    });
  });

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXYears', 1) === 'cirka 1 år');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('aboutXYears', 2) === 'cirka 2 år');
      });
    });
  });

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xYears', 1) === '1 år');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('xYears', 2) === '2 år');
      });
    });
  });

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('overXYears', 1) === 'over 1 år');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('overXYears', 2) === 'over 2 år');
      });
    });
  });

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('almostXYears', 1) === 'næsten 1 år');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(buildDistanceInWordsLocale().localize('almostXYears', 2) === 'næsten 2 år');
      });
    });
  });

  context('with a past suffix', function () {
    it('adds `siden` to a string', function () {
      var result = buildDistanceInWordsLocale().localize('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      });
      assert(result === 'cirka 1 år siden');
    });
  });

  context('with a future suffix', function () {
    it('adds `om` to a string', function () {
      var result = buildDistanceInWordsLocale().localize('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      });
      assert(result === 'om et halvt minut');
    });
  });
});