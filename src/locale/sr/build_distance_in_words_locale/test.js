import ext_assert from "power-assert";
import { buildDistanceInWordsLocale as _buildDistanceInWordsLocale } from "./";

describe('sr locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    ext_assert(typeof _buildDistanceInWordsLocale() === 'object')
  })

  it('localize property is a function', function () {
    ext_assert(typeof _buildDistanceInWordsLocale().localize === 'function')
  })

  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXSeconds', 1) === 'manje od sekunde')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXSeconds', 2) === 'manje od 2 sekundi')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xSeconds', 1) === '1 sekund')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xSeconds', 2) === '2 sekunde')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      ext_assert(_buildDistanceInWordsLocale().localize('halfAMinute') === 'pola minuta')
    })

    it('ignores the second argument', function () {
      ext_assert(_buildDistanceInWordsLocale().localize('halfAMinute', 123) === 'pola minuta')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXMinutes', 1) === 'manje od minute')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXMinutes', 2) === 'manje od 2 minuta')
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
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXHours', 1) === 'oko 1 sat')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXHours', 2) === 'oko 2 sata')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xHours', 1) === '1 sat')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xHours', 2) === '2 sati')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xDays', 1) === '1 dan')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xDays', 2) === '2 dani')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXMonths', 1) === 'oko 1 mesec')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXMonths', 2) === 'oko 2 meseca')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMonths', 1) === '1 mesec')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMonths', 2) === '2 meseci')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXYears', 1) === 'oko 1 godine')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXYears', 2) === 'oko 2 godina')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xYears', 1) === '1 godina')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xYears', 2) === '2 godine')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('overXYears', 1) === 'više od 1 godine')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('overXYears', 2) === 'više od 2 godina')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('almostXYears', 1) === 'skoro 1 godinu')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('almostXYears', 2) === 'skoro 2 godina')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = _buildDistanceInWordsLocale().localize('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      ext_assert(result === 'oko 1 godine pre')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = _buildDistanceInWordsLocale().localize('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      ext_assert(result === 'za pola minuta')
    })
  })
})
