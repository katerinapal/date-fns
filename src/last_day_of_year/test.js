import ext_assert from "power-assert";
import { lastDayOfYear as _lastDayOfYear } from "./";

describe('lastDayOfYear', function () {
  it('returns the date with the time setted to 00:00:00 and the date setted to the last day of a year', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = _lastDayOfYear(date)
    ext_assert.deepEqual(result,
      new Date(2014, 11 /* Dec */, 31)
    )
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString()
    var result = _lastDayOfYear(date)
    ext_assert.deepEqual(result,
      new Date(2014, 11 /* Dec */, 31)
    )
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = _lastDayOfYear(date)
    ext_assert.deepEqual(result,
      new Date(2014, 11 /* Dec */, 31)
    )
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    _lastDayOfYear(date)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})
