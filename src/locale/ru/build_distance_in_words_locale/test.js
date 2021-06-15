import ext_assert from "power-assert";
import { buildDistanceInWordsLocale as _buildDistanceInWordsLocale } from "./";

describe('ru locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    ext_assert(typeof _buildDistanceInWordsLocale() === 'object')
  })

  it('localize property is a function', function () {
    ext_assert(typeof _buildDistanceInWordsLocale().localize === 'function')
  })

  describe('lessThanXSeconds', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = _buildDistanceInWordsLocale().localize('lessThanXSeconds', 1)
          ext_assert(result === 'меньше секунды')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('lessThanXSeconds', number)
            ext_assert(result === 'меньше ' + number + ' секунды')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('lessThanXSeconds', number)
            ext_assert(result === 'меньше ' + number + ' секунд')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = _buildDistanceInWordsLocale().localize('lessThanXSeconds', 1, {
            addSuffix: true,
            comparison: -1
          })
          ext_assert(result === 'меньше секунды назад')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === 'меньше ' + number + ' секунды назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === 'меньше ' + number + ' секунд назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = _buildDistanceInWordsLocale().localize('lessThanXSeconds', 1, {
            addSuffix: true,
            comparison: 1
          })
          ext_assert(result === 'меньше, чем через секунду')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'меньше, чем через ' + number + ' секунду')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'меньше, чем через ' + number + ' секунды')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('lessThanXSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'меньше, чем через ' + number + ' секунд')
          })
        })
      })
    })
  })

  describe('xSeconds', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xSeconds', number)
            ext_assert(result === number + ' секунда')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xSeconds', number)
            ext_assert(result === number + ' секунды')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xSeconds', number)
            ext_assert(result === number + ' секунд')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xSeconds', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' секунду назад')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xSeconds', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' секунды назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xSeconds', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' секунд назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' секунду')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' секунды')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xSeconds', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' секунд')
          })
        })
      })
    })
  })

  describe('halfAMinute', function () {
    it('ignores the second argument', function () {
      var result = _buildDistanceInWordsLocale().localize('halfAMinute', 5)
      ext_assert(result === 'полминуты')
    })

    describe('no suffix', function () {
      it('returns a proper string', function () {
        var result = _buildDistanceInWordsLocale().localize('halfAMinute')
        ext_assert(result === 'полминуты')
      })
    })

    describe('past suffix', function () {
      it('returns a proper string', function () {
        var result = _buildDistanceInWordsLocale().localize('halfAMinute', null, {
          addSuffix: true,
          comparison: -1
        })
        ext_assert(result === 'полминуты назад')
      })
    })

    describe('future suffix', function () {
      it('returns a proper string', function () {
        var result = _buildDistanceInWordsLocale().localize('halfAMinute', null, {
          addSuffix: true,
          comparison: 1
        })
        ext_assert(result === 'через полминуты')
      })
    })
  })

  describe('lessThanXMinutes', function () {
    describe('no suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = _buildDistanceInWordsLocale().localize('lessThanXMinutes', 1)
          ext_assert(result === 'меньше минуты')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('lessThanXMinutes', number)
            ext_assert(result === 'меньше ' + number + ' минуты')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('lessThanXMinutes', number)
            ext_assert(result === 'меньше ' + number + ' минут')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = _buildDistanceInWordsLocale().localize('lessThanXMinutes', 1, {
            addSuffix: true,
            comparison: -1
          })
          ext_assert(result === 'меньше минуты назад')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === 'меньше ' + number + ' минуты назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === 'меньше ' + number + ' минут назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count equals 1', function () {
        it('returns a proper string', function () {
          var result = _buildDistanceInWordsLocale().localize('lessThanXMinutes', 1, {
            addSuffix: true,
            comparison: 1
          })
          ext_assert(result === 'меньше, чем через минуту')
        })
      })

      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'меньше, чем через ' + number + ' минуту')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'меньше, чем через ' + number + ' минуты')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('lessThanXMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'меньше, чем через ' + number + ' минут')
          })
        })
      })
    })
  })

  describe('xMinutes', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMinutes', number)
            ext_assert(result === number + ' минута')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMinutes', number)
            ext_assert(result === number + ' минуты')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMinutes', number)
            ext_assert(result === number + ' минут')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMinutes', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' минуту назад')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMinutes', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' минуты назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMinutes', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' минут назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' минуту')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' минуты')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMinutes', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' минут')
          })
        })
      })
    })
  })

  describe('aboutXHours', function () {
    context('when a remainder from division by 10 is 1 but not 11', function () {
      it('returns a proper string', function () {
        [1, 21, 101, 1231].forEach(function (count) {
          var result = _buildDistanceInWordsLocale().localize('aboutXHours', count)
          ext_assert(result === 'около ' + count + ' часа')
        })
      })
    })

    context('otherwise', function () {
      it('returns a proper string', function () {
        [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 102, 1234].forEach(function (count) {
          var result = _buildDistanceInWordsLocale().localize('aboutXHours', count)
          ext_assert(result === 'около ' + count + ' часов')
        })
      })
    })
  })

  describe('xHours', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xHours', number)
            ext_assert(result === number + ' час')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xHours', number)
            ext_assert(result === number + ' часа')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xHours', number)
            ext_assert(result === number + ' часов')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xHours', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' час назад')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xHours', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' часа назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xHours', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' часов назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xHours', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' час')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xHours', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' часа')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xHours', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' часов')
          })
        })
      })
    })
  })

  describe('xDays', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xDays', number)
            ext_assert(result === number + ' день')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xDays', number)
            ext_assert(result === number + ' дня')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xDays', number)
            ext_assert(result === number + ' дней')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xDays', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' день назад')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xDays', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' дня назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xDays', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' дней назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xDays', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' день')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xDays', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' дня')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xDays', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' дней')
          })
        })
      })
    })
  })

  describe('aboutXMonths', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('aboutXMonths', number)
            ext_assert(result === 'около ' + number + ' месяца')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('aboutXMonths', number)
            ext_assert(result === 'около ' + number + ' месяцев')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('aboutXMonths', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === 'около ' + number + ' месяца назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('aboutXMonths', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === 'около ' + number + ' месяцев назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('aboutXMonths', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'приблизительно через ' + number + ' месяц')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('aboutXMonths', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'приблизительно через ' + number + ' месяца')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('aboutXMonths', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'приблизительно через ' + number + ' месяцев')
          })
        })
      })
    })
  })

  describe('xMonths', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMonths', number)
            ext_assert(result === number + ' месяц')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMonths', number)
            ext_assert(result === number + ' месяца')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMonths', number)
            ext_assert(result === number + ' месяцев')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMonths', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' месяц назад')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMonths', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' месяца назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMonths', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' месяцев назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMonths', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' месяц')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMonths', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' месяца')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xMonths', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' месяцев')
          })
        })
      })
    })
  })

  describe('aboutXYears', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('aboutXYears', number)
            ext_assert(result === 'около ' + number + ' года')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('aboutXYears', number)
            ext_assert(result === 'около ' + number + ' лет')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('aboutXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === 'около ' + number + ' года назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('aboutXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === 'около ' + number + ' лет назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('aboutXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'приблизительно через ' + number + ' год')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('aboutXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'приблизительно через ' + number + ' года')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('aboutXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'приблизительно через ' + number + ' лет')
          })
        })
      })
    })
  })

  describe('xYears', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xYears', number)
            ext_assert(result === number + ' год')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xYears', number)
            ext_assert(result === number + ' года')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xYears', number)
            ext_assert(result === number + ' лет')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xYears', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' год назад')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xYears', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' года назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xYears', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === number + ' лет назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xYears', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' год')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xYears', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' года')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('xYears', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'через ' + number + ' лет')
          })
        })
      })
    })
  })

  describe('overXYears', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('overXYears', number)
            ext_assert(result === 'больше ' + number + ' года')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('overXYears', number)
            ext_assert(result === 'больше ' + number + ' лет')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('overXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === 'больше ' + number + ' года назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 5, 6, 10, 11, 12, 22, 23, 100, 302, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('overXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === 'больше ' + number + ' лет назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('overXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'больше, чем через ' + number + ' год')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('overXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'больше, чем через ' + number + ' года')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('overXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'больше, чем через ' + number + ' лет')
          })
        })
      })
    })
  })

  describe('almostXYears', function () {
    describe('no suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('almostXYears', number)
            ext_assert(result === 'почти ' + number + ' год')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('almostXYears', number)
            ext_assert(result === 'почти ' + number + ' года')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('almostXYears', number)
            ext_assert(result === 'почти ' + number + ' лет')
          })
        })
      })
    })

    describe('past suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('almostXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === 'почти ' + number + ' год назад')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('almostXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === 'почти ' + number + ' года назад')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('almostXYears', number, {
              addSuffix: true,
              comparison: -1
            })
            ext_assert(result === 'почти ' + number + ' лет назад')
          })
        })
      })
    })

    describe('future suffix', function () {
      context('when the count ends with 1 but not with 11', function () {
        it('returns a proper string', function () {
          [1, 21, 31, 301, 321].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('almostXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'почти через ' + number + ' год')
          })
        })
      })

      context('when the count ends with 2, 3 or 4 but not with 12, 13 or 14', function () {
        it('returns a proper string', function () {
          [2, 3, 4, 22, 23, 302].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('almostXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'почти через ' + number + ' года')
          })
        })
      })

      context('when the count is any other number', function () {
        it('returns a proper string', function () {
          [5, 6, 10, 11, 12, 100, 311, 1000].forEach(function (number) {
            var result = _buildDistanceInWordsLocale().localize('almostXYears', number, {
              addSuffix: true,
              comparison: 1
            })
            ext_assert(result === 'почти через ' + number + ' лет')
          })
        })
      })
    })
  })
})
