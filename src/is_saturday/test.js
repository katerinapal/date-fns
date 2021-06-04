import ext_assert from "power-assert";
import { isSaturday as _isSaturday } from "./";

describe('isSaturday', function () {
  it('returns true if the given date is Saturday', function () {
    var result = _isSaturday(new Date(2014, 8 /* Sep */, 27))
    ext_assert(result === true)
  })

  it('returns false if the given date is not Saturday', function () {
    var result = _isSaturday(new Date(2014, 8 /* Sep */, 25))
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isSaturday(new Date(2014, 6 /* Jul */, 12).toString())
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isSaturday(new Date(2014, 1 /* Feb */, 15).getTime())
    ext_assert(result === true)
  })
})
