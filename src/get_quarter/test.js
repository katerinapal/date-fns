import ext_assert from "power-assert";
import { getQuarter as _getQuarter } from "./";

describe('getQuarter', function () {
  it('returns the quarter of the given date', function () {
    var result = _getQuarter(new Date(2014, 6 /* Jul */, 2))
    ext_assert(result === 3)
  })

  it('accepts a string', function () {
    var result = _getQuarter(new Date(2014, 3 /* Apr */, 2).toISOString())
    ext_assert(result === 2)
  })

  it('accepts a timestamp', function () {
    var result = _getQuarter(new Date(2014, 3 /* Apr */, 2).getTime())
    ext_assert(result === 2)
  })
})
