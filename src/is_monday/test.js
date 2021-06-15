import ext_assert from "power-assert";
import { isMonday as _isMonday } from "./";

describe('isMonday', function () {
  it('returns true if the given date is Monday', function () {
    var result = _isMonday(new Date(2014, 8 /* Sep */, 22))
    ext_assert(result === true)
  })

  it('returns false if the given date is not Monday', function () {
    var result = _isMonday(new Date(2014, 8 /* Sep */, 25))
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isMonday(new Date(2014, 6 /* Jul */, 7).toString())
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isMonday(new Date(2014, 1 /* Feb */, 10).getTime())
    ext_assert(result === true)
  })
})
