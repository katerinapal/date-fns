import ext_assert from "power-assert";
import { buildDistanceInWordsLocale as _buildDistanceInWordsLocale } from "./";

describe('th locale > buildDistanceInWordsLocale', function () {
  it('returns an object', function () {
    ext_assert(typeof _buildDistanceInWordsLocale() === 'object')
  })

  it('localize property is a function', function () {
    ext_assert(typeof _buildDistanceInWordsLocale().localize === 'function')
  })

  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXSeconds', 1) === 'น้อยกว่า 1 วินาที')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXSeconds', 2) === 'น้อยกว่า 2 วินาที')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xSeconds', 1) === '1 วินาที')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xSeconds', 2) === '2 วินาที')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      ext_assert(_buildDistanceInWordsLocale().localize('halfAMinute') === 'ครึ่งนาที')
    })

    it('ignores the second argument', function () {
      ext_assert(_buildDistanceInWordsLocale().localize('halfAMinute', 123) === 'ครึ่งนาที')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXMinutes', 1) === 'น้อยกว่า 1 นาที')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('lessThanXMinutes', 2) === 'น้อยกว่า 2 นาที')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMinutes', 1) === '1 นาที')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMinutes', 2) === '2 นาที')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXHours', 1) === 'ประมาณ 1 ชั่วโมง')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXHours', 2) === 'ประมาณ 2 ชั่วโมง')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xHours', 1) === '1 ชั่วโมง')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xHours', 2) === '2 ชั่วโมง')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xDays', 1) === '1 วัน')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xDays', 2) === '2 วัน')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXMonths', 1) === 'ประมาณ 1 เดือน')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXMonths', 2) === 'ประมาณ 2 เดือน')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMonths', 1) === '1 เดือน')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xMonths', 2) === '2 เดือน')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXYears', 1) === 'ประมาณ 1 ปี')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('aboutXYears', 2) === 'ประมาณ 2 ปี')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xYears', 1) === '1 ปี')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('xYears', 2) === '2 ปี')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('overXYears', 1) === 'มากกว่า 1 ปี')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('overXYears', 2) === 'มากกว่า 2 ปี')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('almostXYears', 1) === 'เกือบ 1 ปี')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        ext_assert(_buildDistanceInWordsLocale().localize('almostXYears', 2) === 'เกือบ 2 ปี')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = _buildDistanceInWordsLocale().localize('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      ext_assert(result === 'ประมาณ 1 ปีที่ผ่านมา')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = _buildDistanceInWordsLocale().localize('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      ext_assert(result === 'ในครึ่งนาที')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = _buildDistanceInWordsLocale().localize('xMonths', 1, {
        addSuffix: true,
        comparison: 1
      })
      ext_assert(result === 'ใน 1 เดือน')
    })
  })
})
