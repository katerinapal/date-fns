import ext_assert from "power-assert";
import { isFriday as _isFriday } from "./";

describe('isFriday', function () {
  it('returns true if the given date is Friday', function () {
    var result = _isFriday(new Date(2014, 8 /* Sep */, 26))
    ext_assert(result === true)
  })

  it('returns false if the given date is not Friday', function () {
    var result = _isFriday(new Date(2014, 8 /* Sep */, 25))
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isFriday(new Date(2014, 6 /* Jul */, 11).toString())
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isFriday(new Date(2014, 1 /* Feb */, 14).getTime())
    ext_assert(result === true)
  })
})
