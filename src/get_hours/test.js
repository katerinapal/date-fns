import ext_assert from "power-assert";
import { getHours as _getHours } from "./";

describe('getHours', function () {
  it('returns the hours of the given date', function () {
    var result = _getHours(new Date(2012, 1 /* Feb */, 29, 11, 45))
    ext_assert(result === 11)
  })

  it('accepts a string', function () {
    var result = _getHours(new Date(2014, 6 /* Jul */, 2, 5).toISOString())
    ext_assert(result === 5)
  })

  it('accepts a timestamp', function () {
    var result = _getHours(new Date(2014, 3 /* Apr */, 2, 23, 30).getTime())
    ext_assert(result === 23)
  })
})
