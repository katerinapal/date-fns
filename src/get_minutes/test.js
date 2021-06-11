import ext_assert from "power-assert";
import { getMinutes as _getMinutes } from "./";

describe('getMinutes', function () {
  it('returns the minutes of the given date', function () {
    var result = _getMinutes(new Date(2012, 1 /* Feb */, 29, 11, 45, 5))
    ext_assert(result === 45)
  })

  it('accepts a string', function () {
    var result = _getMinutes(new Date(2014, 6 /* Jul */, 2, 5).toISOString())
    ext_assert(result === 0)
  })

  it('accepts a timestamp', function () {
    var result = _getMinutes(new Date(2014, 3 /* Apr */, 2, 23, 30).getTime())
    ext_assert(result === 30)
  })
})
