import ext_assert from "power-assert";
import { getSeconds as _getSeconds } from "./";

describe('getSeconds', function () {
  it('returns the seconds of the given date', function () {
    var result = _getSeconds(new Date(2012, 1 /* Feb */, 29, 11, 45, 5, 123))
    ext_assert(result === 5)
  })

  it('accepts a string', function () {
    var result = _getSeconds(new Date(2014, 6 /* Jul */, 2, 5, 15).toISOString())
    ext_assert(result === 0)
  })

  it('accepts a timestamp', function () {
    var result = _getSeconds(new Date(2014, 3 /* Apr */, 2, 23, 30, 42).getTime())
    ext_assert(result === 42)
  })
})
