import ext_assert from "power-assert";
import { isTuesday as _isTuesday } from "./";

describe('isTuesday', function () {
  it('returns true if the given date is Tuesday', function () {
    var result = _isTuesday(new Date(2014, 8 /* Sep */, 23))
    ext_assert(result === true)
  })

  it('returns false if the given date is not Tuesday', function () {
    var result = _isTuesday(new Date(2014, 8 /* Sep */, 25))
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isTuesday(new Date(2014, 6 /* Jul */, 8).toString())
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isTuesday(new Date(2014, 1 /* Feb */, 11).getTime())
    ext_assert(result === true)
  })
})
