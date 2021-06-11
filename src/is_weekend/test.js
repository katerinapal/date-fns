import ext_assert from "power-assert";
import { isWeekend as _isWeekend } from "./";

describe('isWeekend', function () {
  it('returns true if the given date is in a weekend', function () {
    var result = _isWeekend(new Date(2014, 9 /* Oct */, 5))
    ext_assert(result === true)
  })

  it('returns false if the given date is not in a weekend', function () {
    var result = _isWeekend(new Date(2014, 9 /* Oct */, 6))
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isWeekend(new Date(2014, 9 /* Oct */, 5).toString())
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isWeekend(new Date(2014, 9 /* Oct */, 5).getTime())
    ext_assert(result === true)
  })
})
