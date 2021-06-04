import ext_assert from "power-assert";
import { isSameDay as _isSameDay } from "./";

describe('isSameDay', function () {
  it('returns true if the given dates have the same day', function () {
    var result = _isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 18, 0)
    )
    ext_assert(result === true)
  })

  it('returns false if the given dates have different days', function () {
    var result = _isSameDay(
      new Date(2014, 8 /* Sep */, 4, 23, 59),
      new Date(2014, 8 /* Sep */, 5, 0, 0)
    )
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0).toISOString(),
      new Date(2014, 8 /* Sep */, 4, 18, 0).toISOString()
    )
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 18, 0).getTime()
    )
    ext_assert(result === true)
  })
})
