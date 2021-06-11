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

describe('ko locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    (0, _powerAssert2.default)(_typeof((0, _.buildDistanceInWordsLocale)()) === 'object');
  });

  it('localize property is a function', function () {
    (0, _powerAssert2.default)(typeof (0, _.buildDistanceInWordsLocale)().localize === 'function');
  });

  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 1) === '1초 미만');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 2) === '2초 미만');
      });
    });
  });

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 1) === '1초');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 2) === '2초');
      });
    });
  });

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute') === '30초');
    });

    it('ignores the second argument', function () {
      (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 123) === '30초');
    });
  });

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1) === '1분 미만');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 2) === '2분 미만');
      });
    });
  });

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 1) === '1분');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 2) === '2분');
      });
    });
  });

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 1) === '약 1시간');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 2) === '약 2시간');
      });
    });
  });

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 1) === '1시간');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 2) === '2시간');
      });
    });
  });

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 1) === '1일');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 2) === '2일');
      });
    });
  });

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 1) === '약 1개월');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 2) === '약 2개월');
      });
    });
  });

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 1) === '1개월');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 2) === '2개월');
      });
    });
  });

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 1) === '약 1년');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 2) === '약 2년');
      });
    });
  });

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xYears', 1) === '1년');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xYears', 2) === '2년');
      });
    });
  });

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 1) === '1년 이상');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 2) === '2년 이상');
      });
    });
  });

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 1) === '거의 1년');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 2) === '거의 2년');
      });
    });
  });

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      });
      (0, _powerAssert2.default)(result === '약 1년 전');
    });
  });

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = (0, _.buildDistanceInWordsLocale)().localize('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      });
      (0, _powerAssert2.default)(result === '30초 후');
    });
  });
});