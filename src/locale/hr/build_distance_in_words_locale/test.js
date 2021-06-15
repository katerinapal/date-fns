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

describe('hr locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    (0, _powerAssert2.default)(_typeof((0, _.buildDistanceInWordsLocale)()) === 'object');
  });

  it('localize property is a function', function () {
    (0, _powerAssert2.default)(typeof (0, _.buildDistanceInWordsLocale)().localize === 'function');
  });

  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 1) === 'manje od 1 sekunde');
      });
    });

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 2) === 'manje od 2 sekunde');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 22) === 'manje od 22 sekunde');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 32) === 'manje od 32 sekunde');
      });
    });

    context('when the count is other', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 12) === 'manje od 12 sekundi');
      });
    });
  });

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 1) === '1 sekunda');
      });
    });

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 2) === '2 sekunde');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 22) === '22 sekunde');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 32) === '32 sekunde');
      });
    });

    context('when the count is other', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 12) === '12 sekundi');
      });
    });
  });

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute') === 'pola minute');
    });

    it('ignores the second argument', function () {
      (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 123) === 'pola minute');
    });
  });

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1) === 'manje od 1 minute');
      });
    });

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 2) === 'manje od 2 minute');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 22) === 'manje od 22 minute');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 32) === 'manje od 32 minute');
      });
    });

    context('when the count is other', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 12) === 'manje od 12 minuta');
      });
    });
  });

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 1) === '1 minuta');
      });
    });

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 2) === '2 minute');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 22) === '22 minute');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 32) === '32 minute');
      });
    });

    context('when the count is other', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 12) === '12 minuta');
      });
    });
  });

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 1) === 'oko 1 sat');
      });
    });

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 2) === 'oko 2 sata');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 22) === 'oko 22 sata');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 32) === 'oko 32 sata');
      });
    });

    context('when the count is other', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 12) === 'oko 12 sati');
      });
    });
  });

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 1) === '1 sat');
      });
    });

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 2) === '2 sata');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 22) === '22 sata');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 32) === '32 sata');
      });
    });

    context('when the count is other', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 12) === '12 sati');
      });
    });
  });

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 1) === '1 dan');
      });
    });

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 2) === '2 dana');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 12) === '12 dana');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 22) === '22 dana');
      });
    });
  });

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 1) === 'oko 1 mjesec');
      });
    });

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 2) === 'oko 2 mjeseca');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 22) === 'oko 22 mjeseca');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 32) === 'oko 32 mjeseca');
      });
    });

    context('when the count is other', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 12) === 'oko 12 mjeseci');
      });
    });
  });

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 1) === '1 mjesec');
      });
    });

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 2) === '2 mjeseca');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 22) === '22 mjeseca');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 32) === '32 mjeseca');
      });
    });

    context('when the count is other', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 12) === '12 mjeseci');
      });
    });
  });

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 1) === 'oko 1 godinu');
      });
    });

    context('when the count is 2-4, 22-24, 32-34', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 2) === 'oko 2 godine');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 22) === 'oko 22 godine');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 32) === 'oko 32 godine');
      });
    });

    context('when the count is other', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 12) === 'oko 12 godina');
      });
    });
  });

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xYears', 1) === '1 godina');
      });
    });

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xYears', 2) === '2 godine');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xYears', 22) === '22 godine');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xYears', 32) === '32 godine');
      });
    });

    context('when the count is other', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xYears', 12) === '12 godina');
      });
    });
  });

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 1) === 'preko 1 godinu');
      });
    });

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 2) === 'preko 2 godine');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 22) === 'preko 22 godine');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 32) === 'preko 32 godine');
      });
    });

    context('when the count is other', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 12) === 'preko 12 godina');
      });
    });
  });

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 1) === 'gotovo 1 godinu');
      });
    });

    context('when the count is 2-4, 22-24, 32-34 etc.', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 2) === 'gotovo 2 godine');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 22) === 'gotovo 22 godine');
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 32) === 'gotovo 32 godine');
      });
    });

    context('when the count is other', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 12) === 'gotovo 12 godina');
      });
    });
  });

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1, {
        addSuffix: true,
        comparison: -1
      });
      (0, _powerAssert2.default)(result === 'prije manje od 1 minute');
    });
  });

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1, {
        addSuffix: true,
        comparison: 1
      });
      (0, _powerAssert2.default)(result === 'za manje od 1 minutu');
    });
  });
});