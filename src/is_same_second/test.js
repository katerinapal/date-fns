import ext_assert from "power-assert";
import { isSameSecond as _isSameSecond } from "./";

describe('isSameSecond', function () {
  it('returns true if the given dates have the same second', function () {
    var result = _isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15),
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15, 500)
    )
    ext_assert(result === true)
  })

  it('returns false if the given dates have different seconds', function () {
    var result = _isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 58, 999),
      new Date(2014, 8 /* Sep */, 4, 6, 30, 59)
    )
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).toISOString(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30, 400).toISOString()
    )
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isSameSecond(
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30, 400).getTime()
    )
    ext_assert(result === true)
  })
})
