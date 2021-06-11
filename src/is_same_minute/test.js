import ext_assert from "power-assert";
import { isSameMinute as _isSameMinute } from "./";

describe('isSameMinute', function () {
  it('returns true if the given dates have the same minute', function () {
    var result = _isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 6, 30),
      new Date(2014, 8 /* Sep */, 4, 6, 30, 15)
    )
    ext_assert(result === true)
  })

  it('returns false if the given dates have different minutes', function () {
    var result = _isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 6, 30, 59),
      new Date(2014, 8 /* Sep */, 4, 6, 31)
    )
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 18, 45).toISOString(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).toISOString()
    )
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isSameMinute(
      new Date(2014, 8 /* Sep */, 4, 18, 45).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime()
    )
    ext_assert(result === true)
  })
})
