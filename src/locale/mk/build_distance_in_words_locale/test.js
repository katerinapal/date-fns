import ext_assert from "power-assert";
import { buildDistanceInWordsLocale as _buildDistanceInWordsLocale } from "./";

describe('mk locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    ext_assert(typeof _buildDistanceInWordsLocale() === 'object')
  })

  it('localize property is a function', function () {
    ext_assert(typeof _buildDistanceInWordsLocale().localize === 'function')
  })

  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXSeconds', 1) === 'помалку од секунда')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXSeconds', 2) === 'помалку од 2 секунди')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xSeconds', 1) === '1 секунда')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xSeconds', 2) === '2 секунди')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      ext_assert(_buildDistanceInWordsLocale().localize('halfAMinute') === 'половина минута')
    })

    it('ignores the second argument', function () {
      ext_assert(_buildDistanceInWordsLocale().localize('halfAMinute', 123) === 'половина минута')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXMinutes', 1) === 'помалку од минута')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXMinutes', 2) === 'помалку од 2 минути')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMinutes', 1) === '1 минута')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMinutes', 2) === '2 минути')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXHours', 1) === 'околу 1 час')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXHours', 2) === 'околу 2 часа')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xHours', 1) === '1 час')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xHours', 2) === '2 часа')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xDays', 1) === '1 ден')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xDays', 2) === '2 дена')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXMonths', 1) === 'околу 1 месец')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXMonths', 2) === 'околу 2 месеци')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMonths', 1) === '1 месец')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMonths', 2) === '2 месеци')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXYears', 1) === 'околу 1 година')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXYears', 2) === 'околу 2 години')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xYears', 1) === '1 година')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xYears', 2) === '2 години')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('overXYears', 1) === 'повеќе од 1 година')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('overXYears', 2) === 'повеќе од 2 години')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('almostXYears', 1) === 'безмалку 1 година')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('almostXYears', 2) === 'безмалку 2 години')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = _buildDistanceInWordsLocale().localize('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      ext_assert(result === 'пред околу 1 година')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = _buildDistanceInWordsLocale().localize('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      ext_assert(result === 'за половина минута')
    })
  })
})
