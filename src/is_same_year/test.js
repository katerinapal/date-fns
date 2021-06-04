import ext_assert from "power-assert";
import { isSameYear as _isSameYear } from "./";

describe('isSameYear', function () {
  it('returns true if the given dates have the same year', function () {
    var result = _isSameYear(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2014, 8 /* Sep */, 25)
    )
    ext_assert(result === true)
  })

  it('returns false if the given dates have different years', function () {
    var result = _isSameYear(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2013, 8 /* Sep */, 25)
    )
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isSameYear(
      new Date(2014, 8 /* Sep */, 2).toISOString(),
      new Date(2014, 8 /* Sep */, 25).toISOString()
    )
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isSameYear(
      new Date(2014, 8 /* Sep */, 2).getTime(),
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
    ext_assert(result === true)
  })
})
