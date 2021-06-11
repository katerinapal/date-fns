import ext_assert from "power-assert";
import { isLastDayOfMonth as _isLastDayOfMonth } from "./";

describe('isLastDayOfMonth', function () {
  it('returns true if the given date is in the last day of month', function () {
    var result = _isLastDayOfMonth(new Date(2014, 9 /* Oct */, 31))
    ext_assert(result === true)
  })

  it('returns false if the given date is not in the last day of month', function () {
    var result = _isLastDayOfMonth(new Date(2014, 9 /* Oct */, 30))
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 9 /* Oct */, 31).toISOString()
    var result = _isLastDayOfMonth(date)
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 9 /* Oct */, 31).getTime()
    var result = _isLastDayOfMonth(date)
    ext_assert(result === true)
  })
})
