import ext_assert from "power-assert";
import { isThursday as _isThursday } from "./";

describe('isThursday', function () {
  it('returns true if the given date is Thursday', function () {
    var result = _isThursday(new Date(2014, 8 /* Sep */, 25))
    ext_assert(result === true)
  })

  it('returns false if the given date is not Thursday', function () {
    var result = _isThursday(new Date(2014, 8 /* Sep */, 24))
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isThursday(new Date(2014, 6 /* Jul */, 10).toString())
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isThursday(new Date(2014, 1 /* Feb */, 13).getTime())
    ext_assert(result === true)
  })
})
