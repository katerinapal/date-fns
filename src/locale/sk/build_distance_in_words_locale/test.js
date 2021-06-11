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

describe('sk locale > buildDistanceInWordsLocale', function () {
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
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 1) === 'menej než sekunda');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number);
            (0, _powerAssert2.default)(result === 'menej než ' + number + ' sekundy');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number);
            (0, _powerAssert2.default)(result === 'menej než ' + number + ' sekúnd');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 1, PAST_OPTIONS) === 'pred menej než sekundou');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred menej než ' + number + ' sekundami');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred menej než ' + number + ' sekundami');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 1, FUTURE_OPTIONS) === 'za menej než sekundu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za menej než ' + number + ' sekundy');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za menej než ' + number + ' sekúnd');
          });
        });
      });
    });
  });

  describe('xSeconds', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 1) === 'sekunda');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number);
            (0, _powerAssert2.default)(result === number + ' sekundy');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number);
            (0, _powerAssert2.default)(result === number + ' sekúnd');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 1, PAST_OPTIONS) === 'pred sekundou');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred ' + number + ' sekundami');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred ' + number + ' sekundami');
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
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 1, FUTURE_OPTIONS) === 'za sekundu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' sekundy');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' sekúnd');
          });
        });
      });
    });
  });

  describe('halfAMinute', function () {
    describe('no suffix', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 0) === 'pol minúty');
      });

      it('ignores the second argument', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 123) === 'pol minúty');
      });
    });

    describe('past suffix', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 0, PAST_OPTIONS) === 'pred pol minútou');
      });

      it('ignores the second argument', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 123, PAST_OPTIONS) === 'pred pol minútou');
      });
    });

    describe('future suffix', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 0, FUTURE_OPTIONS) === 'za pol minúty');
      });

      it('ignores the second argument', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 123, FUTURE_OPTIONS) === 'za pol minúty');
      });
    });
  });

  describe('lessThanXMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1) === 'menej než minúta');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number);
            (0, _powerAssert2.default)(result === 'menej než ' + number + ' minúty');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number);
            (0, _powerAssert2.default)(result === 'menej než ' + number + ' minút');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1, PAST_OPTIONS) === 'pred menej než minútou');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred menej než ' + number + ' minútami');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred menej než ' + number + ' minútami');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1, FUTURE_OPTIONS) === 'za menej než minútu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za menej než ' + number + ' minúty');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za menej než ' + number + ' minút');
          });
        });
      });
    });
  });

  describe('xMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 1) === 'minúta');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number);
            (0, _powerAssert2.default)(result === number + ' minúty');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number);
            (0, _powerAssert2.default)(result === number + ' minút');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 1, PAST_OPTIONS) === 'pred minútou');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred ' + number + ' minútami');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred ' + number + ' minútami');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 1, FUTURE_OPTIONS) === 'za minútu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' minúty');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' minút');
          });
        });
      });
    });
  });

  describe('aboutXHours', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 1) === 'približne hodina');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number);
            (0, _powerAssert2.default)(result === 'približne ' + number + ' hodiny');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number);
            (0, _powerAssert2.default)(result === 'približne ' + number + ' hodín');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 1, PAST_OPTIONS) === 'približne pred hodinou');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'približne pred ' + number + ' hodinami');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'približne pred ' + number + ' hodinami');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 1, FUTURE_OPTIONS) === 'približne za hodinu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'približne za ' + number + ' hodiny');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'približne za ' + number + ' hodín');
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
            (0, _powerAssert2.default)(result === number + ' hodín');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 1, PAST_OPTIONS) === 'pred hodinou');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred ' + number + ' hodinami');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred ' + number + ' hodinami');
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
            (0, _powerAssert2.default)(result === 'za ' + number + ' hodín');
          });
        });
      });
    });
  });

  describe('xDays', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 1) === 'deň');
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
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 1, PAST_OPTIONS) === 'pred dňom');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred ' + number + ' dňami');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred ' + number + ' dňami');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 1, FUTURE_OPTIONS) === 'za deň');
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
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 1) === 'približne mesiac');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number);
            (0, _powerAssert2.default)(result === 'približne ' + number + ' mesiace');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number);
            (0, _powerAssert2.default)(result === 'približne ' + number + ' mesiacov');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 1, PAST_OPTIONS) === 'približne pred mesiacom');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'približne pred ' + number + ' mesiacmi');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'približne pred ' + number + ' mesiacmi');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 1, FUTURE_OPTIONS) === 'približne za mesiac');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'približne za ' + number + ' mesiace');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'približne za ' + number + ' mesiacov');
          });
        });
      });
    });
  });

  describe('xMonths', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 1) === 'mesiac');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number);
            (0, _powerAssert2.default)(result === number + ' mesiace');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number);
            (0, _powerAssert2.default)(result === number + ' mesiacov');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 1, PAST_OPTIONS) === 'pred mesiacom');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred ' + number + ' mesiacmi');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred ' + number + ' mesiacmi');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 1, FUTURE_OPTIONS) === 'za mesiac');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' mesiace');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' mesiacov');
          });
        });
      });
    });
  });

  describe('aboutXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 1) === 'približne rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number);
            (0, _powerAssert2.default)(result === 'približne ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number);
            (0, _powerAssert2.default)(result === 'približne ' + number + ' rokov');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 1, PAST_OPTIONS) === 'približne pred rokom');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'približne pred ' + number + ' rokmi');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'približne pred ' + number + ' rokmi');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 1, FUTURE_OPTIONS) === 'približne za rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'približne za ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'približne za ' + number + ' rokov');
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
            (0, _powerAssert2.default)(result === number + ' rokov');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xYears', 1, PAST_OPTIONS) === 'pred rokom');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred ' + number + ' rokmi');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred ' + number + ' rokmi');
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
            (0, _powerAssert2.default)(result === 'za ' + number + ' rokov');
          });
        });
      });
    });
  });

  describe('overXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 1) === 'viac než rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number);
            (0, _powerAssert2.default)(result === 'viac než ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number);
            (0, _powerAssert2.default)(result === 'viac než ' + number + ' rokov');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 1, PAST_OPTIONS) === 'pred viac než rokom');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred viac než ' + number + ' rokmi');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'pred viac než ' + number + ' rokmi');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 1, FUTURE_OPTIONS) === 'za viac než rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za viac než ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za viac než ' + number + ' rokov');
          });
        });
      });
    });
  });

  describe('almostXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 1) === 'takmer rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number);
            (0, _powerAssert2.default)(result === 'takmer ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number);
            (0, _powerAssert2.default)(result === 'takmer ' + number + ' rokov');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 1, PAST_OPTIONS) === 'takmer pred rokom');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'takmer pred ' + number + ' rokmi');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'takmer pred ' + number + ' rokmi');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', 1, FUTURE_OPTIONS);
          (0, _powerAssert2.default)(result === 'takmer za rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'takmer za ' + number + ' roky');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'takmer za ' + number + ' rokov');
          });
        });
      });
    });
  });
});