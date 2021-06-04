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

var PAST_OPTIONS = {
  addSuffix: true,
  comparison: -1
};

var FUTURE_OPTIONS = {
  addSuffix: true,
  comparison: 1
};

var TWO_FOUR_RANGE = [2, 3, 4];
var OTHER_RANGE = [5, 6, 7, 8, 9, 10, 100];

describe('cs locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    (0, _powerAssert2.default)(_typeof((0, _.buildDistanceInWordsLocale)()) === 'object');
  });

  it('localize property is a function', function () {
    (0, _powerAssert2.default)(typeof (0, _.buildDistanceInWordsLocale)().localize === 'function');
  });

  describe('lessThanXSeconds', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 1) === 'méně než vteřina');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number);
            (0, _powerAssert2.default)(result === 'méně než ' + number + ' vteřiny');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number);
            (0, _powerAssert2.default)(result === 'méně než ' + number + ' vteřin');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 1, PAST_OPTIONS) === 'před méně než vteřinou');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před méně než ' + number + ' vteřinami');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před méně než ' + number + ' vteřinami');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 1, FUTURE_OPTIONS) === 'za méně než vteřinu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za méně než ' + number + ' vteřiny');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za méně než ' + number + ' vteřin');
          });
        });
      });
    });
  });

  describe('xSeconds', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 1) === 'vteřina');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number);
            (0, _powerAssert2.default)(result === number + ' vteřiny');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number);
            (0, _powerAssert2.default)(result === number + ' vteřin');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 1, PAST_OPTIONS) === 'před vteřinou');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před ' + number + ' vteřinami');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před ' + number + ' vteřinami');
          });
        });
      });
    });

    describe('future suffix', function () {
      beforeEach(function () {
        this.options = FUTURE_OPTIONS;
      });

      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 1, FUTURE_OPTIONS) === 'za vteřinu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' vteřiny');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' vteřin');
          });
        });
      });
    });
  });

  describe('halfAMinute', function () {
    describe('no suffix', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 0) === 'půl minuty');
      });

      it('ignores the second argument', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 123) === 'půl minuty');
      });
    });

    describe('past suffix', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 0, PAST_OPTIONS) === 'před půl minutou');
      });

      it('ignores the second argument', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 123, PAST_OPTIONS) === 'před půl minutou');
      });
    });

    describe('future suffix', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 0, FUTURE_OPTIONS) === 'za půl minuty');
      });

      it('ignores the second argument', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 123, FUTURE_OPTIONS) === 'za půl minuty');
      });
    });
  });

  describe('lessThanXMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1) === 'méně než minuta');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number);
            (0, _powerAssert2.default)(result === 'méně než ' + number + ' minuty');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number);
            (0, _powerAssert2.default)(result === 'méně než ' + number + ' minut');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1, PAST_OPTIONS) === 'před méně než minutou');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před méně než ' + number + ' minutami');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před méně než ' + number + ' minutami');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1, FUTURE_OPTIONS) === 'za méně než minutu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za méně než ' + number + ' minuty');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za méně než ' + number + ' minut');
          });
        });
      });
    });
  });

  describe('xMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 1) === 'minuta');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number);
            (0, _powerAssert2.default)(result === number + ' minuty');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number);
            (0, _powerAssert2.default)(result === number + ' minut');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 1, PAST_OPTIONS) === 'před minutou');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před ' + number + ' minutami');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před ' + number + ' minutami');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 1, FUTURE_OPTIONS) === 'za minutu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' minuty');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' minut');
          });
        });
      });
    });
  });

  describe('aboutXHours', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 1) === 'přibližně hodina');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number);
            (0, _powerAssert2.default)(result === 'přibližně ' + number + ' hodiny');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number);
            (0, _powerAssert2.default)(result === 'přibližně ' + number + ' hodin');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 1, PAST_OPTIONS) === 'přibližně před hodinou');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'přibližně před ' + number + ' hodinami');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'přibližně před ' + number + ' hodinami');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 1, FUTURE_OPTIONS) === 'přibližně za hodinu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'přibližně za ' + number + ' hodiny');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'přibližně za ' + number + ' hodin');
          });
        });
      });
    });
  });

  describe('xHours', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 1) === 'hodina');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number);
            (0, _powerAssert2.default)(result === number + ' hodiny');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number);
            (0, _powerAssert2.default)(result === number + ' hodin');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 1, PAST_OPTIONS) === 'před hodinou');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před ' + number + ' hodinami');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před ' + number + ' hodinami');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 1, FUTURE_OPTIONS) === 'za hodinu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' hodiny');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' hodin');
          });
        });
      });
    });
  });

  describe('xDays', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 1) === 'den');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number);
            (0, _powerAssert2.default)(result === number + ' dni');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number);
            (0, _powerAssert2.default)(result === number + ' dní');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 1, PAST_OPTIONS) === 'před dnem');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před ' + number + ' dny');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před ' + number + ' dny');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 1, FUTURE_OPTIONS) === 'za den');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' dni');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' dní');
          });
        });
      });
    });
  });

  describe('aboutXMonths', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 1) === 'přibližně měsíc');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number);
            (0, _powerAssert2.default)(result === 'přibližně ' + number + ' měsíce');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number);
            (0, _powerAssert2.default)(result === 'přibližně ' + number + ' měsíců');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 1, PAST_OPTIONS) === 'přibližně před měsícem');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'přibližně před ' + number + ' měsíci');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'přibližně před ' + number + ' měsíci');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 1, FUTURE_OPTIONS) === 'přibližně za měsíc');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'přibližně za ' + number + ' měsíce');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'přibližně za ' + number + ' měsíců');
          });
        });
      });
    });
  });

  describe('xMonths', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 1) === 'měsíc');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number);
            (0, _powerAssert2.default)(result === number + ' měsíce');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number);
            (0, _powerAssert2.default)(result === number + ' měsíců');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 1, PAST_OPTIONS) === 'před měsícem');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před ' + number + ' měsíci');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před ' + number + ' měsíci');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 1, FUTURE_OPTIONS) === 'za měsíc');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' měsíce');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' měsíců');
          });
        });
      });
    });
  });

  describe('aboutXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 1) === 'přibližně rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number);
            (0, _powerAssert2.default)(result === 'přibližně ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number);
            (0, _powerAssert2.default)(result === 'přibližně ' + number + ' roků');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 1, PAST_OPTIONS) === 'přibližně před rokem');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'přibližně před ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'přibližně před ' + number + ' roky');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 1, FUTURE_OPTIONS) === 'přibližně za rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'přibližně za ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'přibližně za ' + number + ' roků');
          });
        });
      });
    });
  });

  describe('xYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xYears', 1) === 'rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number);
            (0, _powerAssert2.default)(result === number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number);
            (0, _powerAssert2.default)(result === number + ' roků');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xYears', 1, PAST_OPTIONS) === 'před rokem');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před ' + number + ' roky');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xYears', 1, FUTURE_OPTIONS) === 'za rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' roků');
          });
        });
      });
    });
  });

  describe('overXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 1) === 'více než rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number);
            (0, _powerAssert2.default)(result === 'více než ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number);
            (0, _powerAssert2.default)(result === 'více než ' + number + ' roků');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 1, PAST_OPTIONS) === 'před více než rokem');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před více než ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'před více než ' + number + ' roky');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 1, FUTURE_OPTIONS) === 'za více než rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za více než ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za více než ' + number + ' roků');
          });
        });
      });
    });
  });

  describe('almostXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 1) === 'skoro rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number);
            (0, _powerAssert2.default)(result === 'skoro ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number);
            (0, _powerAssert2.default)(result === 'skoro ' + number + ' roků');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 1, PAST_OPTIONS) === 'skoro před rokem');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'skoro před ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'skoro před ' + number + ' roky');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', 1, FUTURE_OPTIONS);
          (0, _powerAssert2.default)(result === 'skoro za rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'skoro za ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'skoro za ' + number + ' roků');
          });
        });
      });
    });
  });
});