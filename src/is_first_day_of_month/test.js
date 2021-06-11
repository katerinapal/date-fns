import ext_assert from "power-assert";
import { isFirstDayOfMonth as _isFirstDayOfMonth } from "./";

describe('isFirstDayOfMonth', function () {
  it('returns true if the given date is in the last day of month', function () {
    var result = _isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 1))
    ext_assert(result === true)
  })

  it('returns false if the given date is not in the last day of month', function () {
    var result = _isFirstDayOfMonth(new Date(2014, 9 /* Oct */, 2))
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 9 /* Oct */, 1).toISOString()
    var result = _isFirstDayOfMonth(date)
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 9 /* Oct */, 1).getTime()
    var result = _isFirstDayOfMonth(date)
    ext_assert(result === true)
  })
})
