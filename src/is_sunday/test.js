import ext_assert from "power-assert";
import { isSunday as _isSunday } from "./";

describe('isSunday', function () {
  it('returns true if the given date is Sunday', function () {
    var result = _isSunday(new Date(2014, 8 /* Sep */, 21))
    ext_assert(result === true)
  })

  it('returns false if the given date is not Sunday', function () {
    var result = _isSunday(new Date(2014, 8 /* Sep */, 25))
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isSunday(new Date(2014, 6 /* Jul */, 6).toString())
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isSunday(new Date(2014, 1 /* Feb */, 9).getTime())
    ext_assert(result === true)
  })
})
