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

describe('zh_CN locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    (0, _powerAssert2.default)(_typeof((0, _.buildDistanceInWordsLocale)()) === 'object');
  });

  it('localize property is a function', function () {
    (0, _powerAssert2.default)(typeof (0, _.buildDistanceInWordsLocale)().localize === 'function');
  });

  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 1) === '不到 1 秒');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 2) === '不到 2 秒');
      });
    });
  });

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 1) === '1 秒');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 2) === '2 秒');
      });
    });
  });

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute') === '半分钟');
    });

    it('ignores the second argument', function () {
      (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 123) === '半分钟');
    });
  });

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1) === '不到 1 分钟');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 2) === '不到 2 分钟');
      });
    });
  });

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 1) === '1 分钟');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 2) === '2 分钟');
      });
    });
  });

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 1) === '大约 1 小时');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 2) === '大约 2 小时');
      });
    });
  });

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 1) === '1 小时');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 2) === '2 小时');
      });
    });
  });

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 1) === '1 天');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 2) === '2 天');
      });
    });
  });

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 1) === '大约 1 个月');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 2) === '大约 2 个月');
      });
    });
  });

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 1) === '1 个月');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 2) === '2 个月');
      });
    });
  });

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 1) === '大约 1 年');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 2) === '大约 2 年');
      });
    });
  });

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xYears', 1) === '1 年');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xYears', 2) === '2 年');
      });
    });
  });

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 1) === '超过 1 年');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 2) === '超过 2 年');
      });
    });
  });

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 1) === '将近 1 年');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 2) === '将近 2 年');
      });
    });
  });

  context('with a past suffix', function () {
    it('adds `前` to a string', function () {
      var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      });
      (0, _powerAssert2.default)(result === '大约 1 年前');
    });
  });

  context('with a future suffix', function () {
    it('adds `内` to a string', function () {
      var result = (0, _.buildDistanceInWordsLocale)().localize('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      });
      (0, _powerAssert2.default)(result === '半分钟内');
    });
  });
});