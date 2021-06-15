import ext_assert from "power-assert";
import { isDate as _isDate } from "./";

describe('isDate', function () {
  it('returns true if the given argument is an instance of Date', function () {
    var result = _isDate(new Date())
    ext_assert(result === true)
  })

  it('returns true if the given argument is an invalid Date', function () {
    var result = _isDate(new Date(''))
    ext_assert(result === true)
  })

  it('returns false if the given argument is not an instance of Date', function () {
    var result = _isDate(1404259200000)
    ext_assert(result === false)
  })
})
