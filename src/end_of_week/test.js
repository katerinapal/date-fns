import ext_assert from "power-assert";
import { endOfWeek as _endOfWeek } from "./";

describe('endOfWeek', function () {
  it('returns the date with the time setted to 23:59:59:999 and the date setted to the last day of a week', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = _endOfWeek(date)
    ext_assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
    )
  })

  it('allows to specify which day is the first day of the week', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = _endOfWeek(date, {weekStartsOn: 1})
    ext_assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999)
    )
  })

  it('implicitly converts options', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    // $ExpectedMistake
    var result = _endOfWeek(date, {weekStartsOn: '1'})
    ext_assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999)
    )
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString()
    var result = _endOfWeek(date)
    ext_assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
    )
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = _endOfWeek(date)
    ext_assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
    )
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    _endOfWeek(date)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  describe('edge cases', function () {
    context('when the given day is before the start of a week', function () {
      it('it returns the end of a week', function () {
        var date = new Date(2014, 9 /* Oct */, 6)
        var result = _endOfWeek(date, {weekStartsOn: 3})
        ext_assert.deepEqual(result, new Date(2014, 9 /* Oct */, 7, 23, 59, 59, 999))
      })
    })

    context('when the given day is the start of a week', function () {
      it('it returns the end of a week', function () {
        var date = new Date(2014, 9 /* Oct */, 8)
        var result = _endOfWeek(date, {weekStartsOn: 3})
        ext_assert.deepEqual(result, new Date(2014, 9 /* Oct */, 14, 23, 59, 59, 999))
      })
    })

    context('when the given day is after the start of a week', function () {
      it('it returns the end of a week', function () {
        var date = new Date(2014, 9 /* Oct */, 10)
        var result = _endOfWeek(date, {weekStartsOn: 3})
        ext_assert.deepEqual(result, new Date(2014, 9 /* Oct */, 14, 23, 59, 59, 999))
      })
    })

    it('handles the week at the end of a year', function () {
      var date = new Date(2014, 11 /* Dec */, 29)
      var result = _endOfWeek(date, {weekStartsOn: 5})
      ext_assert.deepEqual(result, new Date(2015, 0 /* Jan */, 1, 23, 59, 59, 999))
    })
  })
})
