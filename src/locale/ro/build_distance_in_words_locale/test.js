import ext_assert from "power-assert";
import { buildDistanceInWordsLocale as _buildDistanceInWordsLocale } from "./";

describe('ro locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    ext_assert(typeof _buildDistanceInWordsLocale() === 'object')
  })

  it('localize property is a function', function () {
    ext_assert(typeof _buildDistanceInWordsLocale().localize === 'function')
  })

  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXSeconds', 1) === 'mai puțin de o secundă')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXSeconds', 2) === 'mai puțin de 2 secunde')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xSeconds', 1) === '1 secundă')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xSeconds', 2) === '2 secunde')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      ext_assert(_buildDistanceInWordsLocale().localize('halfAMinute') === 'jumătate de minut')
    })

    it('ignores the second argument', function () {
      ext_assert(_buildDistanceInWordsLocale().localize('halfAMinute', 123) === 'jumătate de minut')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXMinutes', 1) === 'mai puțin de un minut')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXMinutes', 2) === 'mai puțin de 2 minute')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMinutes', 1) === '1 minut')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMinutes', 2) === '2 minute')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXHours', 1) === 'circa 1 oră')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXHours', 2) === 'circa 2 ore')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xHours', 1) === '1 oră')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xHours', 2) === '2 ore')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xDays', 1) === '1 zi')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xDays', 2) === '2 zile')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXMonths', 1) === 'circa 1 lună')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXMonths', 2) === 'circa 2 luni')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMonths', 1) === '1 lună')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMonths', 2) === '2 luni')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXYears', 1) === 'circa 1 an')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXYears', 2) === 'circa 2 ani')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xYears', 1) === '1 an')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xYears', 2) === '2 ani')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('overXYears', 1) === 'peste 1 an')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('overXYears', 2) === 'peste 2 ani')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('almostXYears', 1) === 'aproape 1 an')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('almostXYears', 2) === 'aproape 2 ani')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = _buildDistanceInWordsLocale().localize('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      ext_assert(result === 'circa 1 an în urmă')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = _buildDistanceInWordsLocale().localize('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      ext_assert(result === 'în jumătate de minut')
    })
  })
})
