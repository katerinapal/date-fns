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

var TWO_FOUR_RANGE = [2, 3, 4, 22, 23, 24, 102, 103, 104];
var OTHER_RANGE = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 25, 26, 101, 105, 106];
var MORE_THAN_ONE_RANGE = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

describe('pl locale > buildDistanceInWordsLocale', function () {
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
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 1) === 'mniej niż sekunda');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number);
            (0, _powerAssert2.default)(result === 'mniej niż ' + number + ' sekundy');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number);
            (0, _powerAssert2.default)(result === 'mniej niż ' + number + ' sekund');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 1, PAST_OPTIONS) === 'mniej niż sekundę temu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'mniej niż ' + number + ' sekundy temu');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'mniej niż ' + number + ' sekund temu');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 1, FUTURE_OPTIONS) === 'za mniej niż sekundę');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za mniej niż ' + number + ' sekundy');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za mniej niż ' + number + ' sekund');
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
            (0, _powerAssert2.default)(result === number + ' sekund');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 1, PAST_OPTIONS) === 'sekundę temu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === number + ' sekundy temu');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === number + ' sekund temu');
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
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xSeconds', 1, FUTURE_OPTIONS) === 'za sekundę');
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
            (0, _powerAssert2.default)(result === 'za ' + number + ' sekund');
          });
        });
      });
    });
  });

  describe('halfAMinute', function () {
    describe('no suffix', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 0) === 'pół minuty');
      });

      it('ignores the second argument', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 123) === 'pół minuty');
      });
    });

    describe('past suffix', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 0, PAST_OPTIONS) === 'pół minuty temu');
      });

      it('ignores the second argument', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 123, PAST_OPTIONS) === 'pół minuty temu');
      });
    });

    describe('future suffix', function () {
      it('returns a proper string', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 0, FUTURE_OPTIONS) === 'za pół minuty');
      });

      it('ignores the second argument', function () {
        (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 123, FUTURE_OPTIONS) === 'za pół minuty');
      });
    });
  });

  describe('lessThanXMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1) === 'mniej niż minuta');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number);
            (0, _powerAssert2.default)(result === 'mniej niż ' + number + ' minuty');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number);
            (0, _powerAssert2.default)(result === 'mniej niż ' + number + ' minut');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1, PAST_OPTIONS) === 'mniej niż minutę temu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'mniej niż ' + number + ' minuty temu');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'mniej niż ' + number + ' minut temu');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1, FUTURE_OPTIONS) === 'za mniej niż minutę');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za mniej niż ' + number + ' minuty');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za mniej niż ' + number + ' minut');
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
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 1, PAST_OPTIONS) === 'minutę temu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === number + ' minuty temu');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === number + ' minut temu');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMinutes', 1, FUTURE_OPTIONS) === 'za minutę');
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
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 1) === 'około godzina');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number);
            (0, _powerAssert2.default)(result === 'około ' + number + ' godziny');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number);
            (0, _powerAssert2.default)(result === 'około ' + number + ' godzin');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 1, PAST_OPTIONS) === 'około godziny temu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'około ' + number + ' godziny temu');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'około ' + number + ' godzin temu');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXHours', 1, FUTURE_OPTIONS) === 'za około godzinę');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za około ' + number + ' godziny');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za około ' + number + ' godzin');
          });
        });
      });
    });
  });

  describe('xHours', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 1) === 'godzina');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number);
            (0, _powerAssert2.default)(result === number + ' godziny');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number);
            (0, _powerAssert2.default)(result === number + ' godzin');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 1, PAST_OPTIONS) === 'godzinę temu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === number + ' godziny temu');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === number + ' godzin temu');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xHours', 1, FUTURE_OPTIONS) === 'za godzinę');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' godziny');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' godzin');
          });
        });
      });
    });
  });

  describe('xDays', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 1) === 'dzień');
        });
      });

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          MORE_THAN_ONE_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number);
            (0, _powerAssert2.default)(result === number + ' dni');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 1, PAST_OPTIONS) === 'dzień temu');
        });
      });

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          MORE_THAN_ONE_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === number + ' dni temu');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xDays', 1, FUTURE_OPTIONS) === 'za 1 dzień');
        });
      });

      context('when the count is more than 1', function () {
        it('returns a proper string', function () {
          MORE_THAN_ONE_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' dni');
          });
        });
      });
    });
  });

  describe('aboutXMonths', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 1) === 'około miesiąc');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number);
            (0, _powerAssert2.default)(result === 'około ' + number + ' miesiące');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number);
            (0, _powerAssert2.default)(result === 'około ' + number + ' miesięcy');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 1, PAST_OPTIONS) === 'około miesiąc temu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'około ' + number + ' miesiące temu');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'około ' + number + ' miesięcy temu');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', 1, FUTURE_OPTIONS) === 'za około miesiąc');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za około ' + number + ' miesiące');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za około ' + number + ' miesięcy');
          });
        });
      });
    });
  });

  describe('xMonths', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 1) === 'miesiąc');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number);
            (0, _powerAssert2.default)(result === number + ' miesiące');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number);
            (0, _powerAssert2.default)(result === number + ' miesięcy');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 1, PAST_OPTIONS) === 'miesiąc temu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === number + ' miesiące temu');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === number + ' miesięcy temu');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xMonths', 1, FUTURE_OPTIONS) === 'za miesiąc');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' miesiące');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' miesięcy');
          });
        });
      });
    });
  });

  describe('aboutXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 1) === 'około rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number);
            (0, _powerAssert2.default)(result === 'około ' + number + ' lata');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number);
            (0, _powerAssert2.default)(result === 'około ' + number + ' lat');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 1, PAST_OPTIONS) === 'około rok temu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'około ' + number + ' lata temu');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'około ' + number + ' lat temu');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('aboutXYears', 1, FUTURE_OPTIONS) === 'za około rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za około ' + number + ' lata');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za około ' + number + ' lat');
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
            (0, _powerAssert2.default)(result === number + ' lata');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number);
            (0, _powerAssert2.default)(result === number + ' lat');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('xYears', 1, PAST_OPTIONS) === 'rok temu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === number + ' lata temu');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === number + ' lat temu');
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
            (0, _powerAssert2.default)(result === 'za ' + number + ' lata');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ' + number + ' lat');
          });
        });
      });
    });
  });

  describe('overXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 1) === 'ponad rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number);
            (0, _powerAssert2.default)(result === 'ponad ' + number + ' lata');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number);
            (0, _powerAssert2.default)(result === 'ponad ' + number + ' lat');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 1, PAST_OPTIONS) === 'ponad rok temu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'ponad ' + number + ' lata temu');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'ponad ' + number + ' lat temu');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('overXYears', 1, FUTURE_OPTIONS) === 'za ponad rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ponad ' + number + ' lata');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za ponad ' + number + ' lat');
          });
        });
      });
    });
  });

  describe('almostXYears', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 1) === 'prawie rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number);
            (0, _powerAssert2.default)(result === 'prawie ' + number + ' lata');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number);
            (0, _powerAssert2.default)(result === 'prawie ' + number + ' lat');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          (0, _powerAssert2.default)((0, _.buildDistanceInWordsLocale)().localize('almostXYears', 1, PAST_OPTIONS) === 'prawie rok temu');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'prawie ' + number + ' lata temu');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, PAST_OPTIONS);
            (0, _powerAssert2.default)(result === 'prawie ' + number + ' lat temu');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', 1, FUTURE_OPTIONS);
          (0, _powerAssert2.default)(result === 'za prawie rok');
        });
      });

      context('when the count is more than 1, less than 5', function () {
        it('returns a proper string', function () {
          TWO_FOUR_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za prawie ' + number + ' lata');
          });
        });
      });

      context('when the count is more than 4', function () {
        it('returns a proper string', function () {
          OTHER_RANGE.forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, FUTURE_OPTIONS);
            (0, _powerAssert2.default)(result === 'za prawie ' + number + ' lat');
          });
        });
      });
    });
  });
});