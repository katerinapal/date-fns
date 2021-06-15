import ext_assert from "power-assert";
import { buildDistanceInWordsLocale as _buildDistanceInWordsLocale } from "./";

describe('tr locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    ext_assert(typeof _buildDistanceInWordsLocale() === 'object')
  })

  it('localize property is a function', function () {
    ext_assert(typeof _buildDistanceInWordsLocale().localize === 'function')
  })

  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXSeconds', 1) === 'bir saniyeden az')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXSeconds', 2) === '2 saniyeden az')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xSeconds', 1) === '1 saniye')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xSeconds', 2) === '2 saniye')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      ext_assert(_buildDistanceInWordsLocale().localize('halfAMinute') === 'yarım dakika')
    })

    it('ignores the second argument', function () {
      ext_assert(_buildDistanceInWordsLocale().localize('halfAMinute', 123) === 'yarım dakika')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXMinutes', 1) === 'bir dakikadan az')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXMinutes', 2) === '2 dakikadan az')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMinutes', 1) === '1 dakika')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMinutes', 2) === '2 dakika')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXHours', 1) === 'yaklaşık 1 saat')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXHours', 2) === 'yaklaşık 2 saat')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xHours', 1) === '1 saat')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xHours', 2) === '2 saat')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xDays', 1) === '1 gün')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xDays', 2) === '2 gün')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXMonths', 1) === 'yaklaşık 1 ay')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXMonths', 2) === 'yaklaşık 2 ay')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMonths', 1) === '1 ay')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMonths', 2) === '2 ay')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXYears', 1) === 'yaklaşık 1 yıl')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXYears', 2) === 'yaklaşık 2 yıl')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xYears', 1) === '1 yıl')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xYears', 2) === '2 yıl')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('overXYears', 1) === '1 yıldan fazla')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('overXYears', 2) === '2 yıldan fazla')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('almostXYears', 1) === 'neredeyse 1 yıl')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('almostXYears', 2) === 'neredeyse 2 yıl')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `önce` to a string', function () {
      var result = _buildDistanceInWordsLocale().localize('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      ext_assert(result === 'yaklaşık 1 yıl önce')
    })

    it('adds `bir süre önce` to lessThanXSeconds', function () {
      var result = _buildDistanceInWordsLocale().localize('lessThanXSeconds', 1, {
        addSuffix: true,
        comparison: -1
      })
      ext_assert(result === 'bir saniyeden az bir süre önce')
    })

    it('adds `bir süre önce` to lessThanXMinutes', function () {
      var result = _buildDistanceInWordsLocale().localize('lessThanXMinutes', 1, {
        addSuffix: true,
        comparison: -1
      })
      ext_assert(result === 'bir dakikadan az bir süre önce')
    })

    it('adds `bir süre önce` to overXYears', function () {
      var result = _buildDistanceInWordsLocale().localize('overXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      ext_assert(result === '1 yıldan fazla bir süre önce')
    })
  })

  context('with a future suffix', function () {
    it('adds `içinde` to a string', function () {
      var result = _buildDistanceInWordsLocale().localize('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      ext_assert(result === 'yarım dakika içinde')
    })

    it('adds `bir süre içinde` to lessThanXSeconds', function () {
      var result = _buildDistanceInWordsLocale().localize('lessThanXSeconds', 1, {
        addSuffix: true,
        comparison: 1
      })
      ext_assert(result === 'bir saniyeden az bir süre içinde')
    })

    it('adds `bir süre içinde` to lessThanXMinutes', function () {
      var result = _buildDistanceInWordsLocale().localize('lessThanXMinutes', 1, {
        addSuffix: true,
        comparison: 1
      })
      ext_assert(result === 'bir dakikadan az bir süre içinde')
    })

    it('adds `bir süre içinde` to overXYears', function () {
      var result = _buildDistanceInWordsLocale().localize('overXYears', 1, {
        addSuffix: true,
        comparison: 1
      })
      ext_assert(result === '1 yıldan fazla bir süre içinde')
    })
  })
})
