import imp_getHours from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var getHours = imp_getHours

describe('getHours', function () {
  it('returns the hours of the given date', function () {
    var result = getHours(new Date(2012, 1 /* Feb */, 29, 11, 45))
    assert(result === 11)
  })

  it('accepts a string', function () {
    var result = getHours(new Date(2014, 6 /* Jul */, 2, 5).toISOString())
    assert(result === 5)
  })

  it('accepts a timestamp', function () {
    var result = getHours(new Date(2014, 3 /* Apr */, 2, 23, 30).getTime())
    assert(result === 23)
  })
})
