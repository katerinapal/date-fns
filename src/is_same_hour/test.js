import ext_assert from "power-assert";
import { isSameHour as _isSameHour } from "./";

describe('isSameHour', function () {
  it('returns true if the given dates have the same hour', function () {
    var result = _isSameHour(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 6, 30)
    )
    ext_assert(result === true)
  })

  it('returns false if the given dates have different hours', function () {
    var result = _isSameHour(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 5, 0)
    )
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isSameHour(
      new Date(2014, 8 /* Sep */, 4, 18, 0).toISOString(),
      new Date(2014, 8 /* Sep */, 4, 18, 45).toISOString()
    )
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isSameHour(
      new Date(2014, 8 /* Sep */, 4, 18, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 45).getTime()
    )
    ext_assert(result === true)
  })
})
