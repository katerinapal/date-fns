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

describe('ru locale > buildDistanceInWordsLocale', function () {
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
          var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 1);
          (0, _powerAssert2.default)(result === 'меньше секунды');
        });
      });

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number);
            (0, _powerAssert2.default)(result === 'меньше ' + number + ' секунды');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number);
            (0, _powerAssert2.default)(result === 'меньше ' + number + ' секунд');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 1, {
            addSuffix: true,
            comparison: -1
          });
          (0, _powerAssert2.default)(result === 'меньше секунды назад');
        });
      });

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === 'меньше ' + number + ' секунды назад');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === 'меньше ' + number + ' секунд назад');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', 1, {
            addSuffix: true,
            comparison: 1
          });
          (0, _powerAssert2.default)(result === 'меньше, чем через секунду');
        });
      });

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'меньше, чем через ' + number + ' секунду');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'меньше, чем через ' + number + ' секунды');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'меньше, чем через ' + number + ' секунд');
          });
        });
      });
    });
  });

  describe('xSeconds', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number);
            (0, _powerAssert2.default)(result === number + ' секунда');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number);
            (0, _powerAssert2.default)(result === number + ' секунды');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number);
            (0, _powerAssert2.default)(result === number + ' секунд');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' секунду назад');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' секунды назад');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' секунд назад');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' секунду');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' секунды');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xSeconds', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' секунд');
          });
        });
      });
    });
  });

  describe('halfAMinute', function () {
    it('ignores the second argument', function () {
      var result = (0, _.buildDistanceInWordsLocale)().localize('halfAMinute', 5);
      (0, _powerAssert2.default)(result === 'полминуты');
    });

    describe('no suffix', function () {
      it('returns a proper string', function () {
        var result = (0, _.buildDistanceInWordsLocale)().localize('halfAMinute');
        (0, _powerAssert2.default)(result === 'полминуты');
      });
    });

    describe('past suffix', function () {
      it('returns a proper string', function () {
        var result = (0, _.buildDistanceInWordsLocale)().localize('halfAMinute', null, {
          addSuffix: true,
          comparison: -1
        });
        (0, _powerAssert2.default)(result === 'полминуты назад');
      });
    });

    describe('future suffix', function () {
      it('returns a proper string', function () {
        var result = (0, _.buildDistanceInWordsLocale)().localize('halfAMinute', null, {
          addSuffix: true,
          comparison: 1
        });
        (0, _powerAssert2.default)(result === 'через полминуты');
      });
    });
  });

  describe('lessThanXMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1);
          (0, _powerAssert2.default)(result === 'меньше минуты');
        });
      });

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number);
            (0, _powerAssert2.default)(result === 'меньше ' + number + ' минуты');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number);
            (0, _powerAssert2.default)(result === 'меньше ' + number + ' минут');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1, {
            addSuffix: true,
            comparison: -1
          });
          (0, _powerAssert2.default)(result === 'меньше минуты назад');
        });
      });

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === 'меньше ' + number + ' минуты назад');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === 'меньше ' + number + ' минут назад');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', 1, {
            addSuffix: true,
            comparison: 1
          });
          (0, _powerAssert2.default)(result === 'меньше, чем через минуту');
        });
      });

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'меньше, чем через ' + number + ' минуту');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'меньше, чем через ' + number + ' минуты');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'меньше, чем через ' + number + ' минут');
          });
        });
      });
    });
  });

  describe('xMinutes', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number);
            (0, _powerAssert2.default)(result === number + ' минута');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number);
            (0, _powerAssert2.default)(result === number + ' минуты');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number);
            (0, _powerAssert2.default)(result === number + ' минут');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' минуту назад');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' минуты назад');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' минут назад');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' минуту');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' минуты');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMinutes', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' минут');
          });
        });
      });
    });
  });

  describe('aboutXHours', function () {
    context('when a remainder from division by 10 is 1 but not 11', function () {
      it('returns a proper string', function () {
        [1, 21, 101, 1231].forEach(function (count) {
          var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', count);
          (0, _powerAssert2.default)(result === 'около ' + count + ' часа');
        });
      });
    });

    context('otherwise', function () {
      it('returns a proper string', function () {
        [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 102, 1234].forEach(function (count) {
          var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXHours', count);
          (0, _powerAssert2.default)(result === 'около ' + count + ' часов');
        });
      });
    });
  });

  describe('xHours', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number);
            (0, _powerAssert2.default)(result === number + ' час');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number);
            (0, _powerAssert2.default)(result === number + ' часа');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number);
            (0, _powerAssert2.default)(result === number + ' часов');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' час назад');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' часа назад');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' часов назад');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' час');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' часа');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xHours', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' часов');
          });
        });
      });
    });
  });

  describe('xDays', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number);
            (0, _powerAssert2.default)(result === number + ' день');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number);
            (0, _powerAssert2.default)(result === number + ' дня');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number);
            (0, _powerAssert2.default)(result === number + ' дней');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' день назад');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' дня назад');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' дней назад');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' день');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' дня');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xDays', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' дней');
          });
        });
      });
    });
  });

  describe('aboutXMonths', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number);
            (0, _powerAssert2.default)(result === 'около ' + number + ' месяца');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number);
            (0, _powerAssert2.default)(result === 'около ' + number + ' месяцев');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === 'около ' + number + ' месяца назад');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === 'около ' + number + ' месяцев назад');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'приблизительно через ' + number + ' месяц');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'приблизительно через ' + number + ' месяца');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXMonths', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'приблизительно через ' + number + ' месяцев');
          });
        });
      });
    });
  });

  describe('xMonths', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number);
            (0, _powerAssert2.default)(result === number + ' месяц');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number);
            (0, _powerAssert2.default)(result === number + ' месяца');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number);
            (0, _powerAssert2.default)(result === number + ' месяцев');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' месяц назад');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' месяца назад');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' месяцев назад');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' месяц');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' месяца');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xMonths', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' месяцев');
          });
        });
      });
    });
  });

  describe('aboutXYears', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number);
            (0, _powerAssert2.default)(result === 'около ' + number + ' года');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number);
            (0, _powerAssert2.default)(result === 'около ' + number + ' лет');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === 'около ' + number + ' года назад');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === 'около ' + number + ' лет назад');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'приблизительно через ' + number + ' год');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'приблизительно через ' + number + ' года');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('aboutXYears', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'приблизительно через ' + number + ' лет');
          });
        });
      });
    });
  });

  describe('xYears', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number);
            (0, _powerAssert2.default)(result === number + ' год');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number);
            (0, _powerAssert2.default)(result === number + ' года');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number);
            (0, _powerAssert2.default)(result === number + ' лет');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' год назад');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' года назад');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === number + ' лет назад');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' год');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' года');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('xYears', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'через ' + number + ' лет');
          });
        });
      });
    });
  });

  describe('overXYears', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number);
            (0, _powerAssert2.default)(result === 'больше ' + number + ' года');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number);
            (0, _powerAssert2.default)(result === 'больше ' + number + ' лет');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === 'больше ' + number + ' года назад');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === 'больше ' + number + ' лет назад');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'больше, чем через ' + number + ' год');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'больше, чем через ' + number + ' года');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('overXYears', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'больше, чем через ' + number + ' лет');
          });
        });
      });
    });
  });

  describe('almostXYears', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number);
            (0, _powerAssert2.default)(result === 'почти ' + number + ' год');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number);
            (0, _powerAssert2.default)(result === 'почти ' + number + ' года');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number);
            (0, _powerAssert2.default)(result === 'почти ' + number + ' лет');
          });
        });
      });
    });

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === 'почти ' + number + ' год назад');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === 'почти ' + number + ' года назад');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, {
              addSuffix: true,
              comparison: -1
            });
            (0, _powerAssert2.default)(result === 'почти ' + number + ' лет назад');
          });
        });
      });
    });

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'почти через ' + number + ' год');
          });
        });
      });

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'почти через ' + number + ' года');
          });
        });
      });

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = (0, _.buildDistanceInWordsLocale)().localize('almostXYears', number, {
              addSuffix: true,
              comparison: 1
            });
            (0, _powerAssert2.default)(result === 'почти через ' + number + ' лет');
          });
        });
      });
    });
  });
});