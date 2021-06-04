import ext_assert from "power-assert";
import { isSameMonth as _isSameMonth } from "./";

describe('isSameMonth', function () {
  it('returns true if the given dates have the same month (and year)', function () {
    var result = _isSameMonth(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2014, 8 /* Sep */, 25)
    )
    ext_assert(result === true)
  })

  it('returns false if the given dates have different months', function () {
    var result = _isSameMonth(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2013, 8 /* Sep */, 25)
    )
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isSameMonth(
      new Date(2014, 8 /* Sep */, 2).toISOString(),
      new Date(2014, 8 /* Sep */, 25).toISOString()
    )
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isSameMonth(
      new Date(2014, 8 /* Sep */, 2).getTime(),
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
    ext_assert(result === true)
  })
})
