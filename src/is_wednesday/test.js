import ext_assert from "power-assert";
import { isWednesday as _isWednesday } from "./";

describe('isWednesday', function () {
  it('returns true if the given date is Wednesday', function () {
    var result = _isWednesday(new Date(2014, 8 /* Sep */, 24))
    ext_assert(result === true)
  })

  it('returns false if the given date is not Wednesday', function () {
    var result = _isWednesday(new Date(2014, 8 /* Sep */, 25))
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isWednesday(new Date(2014, 6 /* Jul */, 9).toString())
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isWednesday(new Date(2014, 1 /* Feb */, 12).getTime())
    ext_assert(result === true)
  })
})
