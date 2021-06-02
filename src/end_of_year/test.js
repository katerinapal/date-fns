import imp_endOfYear from "./";
import ext_powerassert from "power-assert";
// @flow
/* eslint-env mocha */

var assert = ext_powerassert
var endOfYear = imp_endOfYear

describe('endOfMonth', function () {
  it('returns the date with the time setted to 23:59:59.999 and the date setted to the last day of a year', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = endOfYear(date)
    assert.deepEqual(result,
      new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999)
    )
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString()
    var result = endOfYear(date)
    assert.deepEqual(result,
      new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999)
    )
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = endOfYear(date)
    assert.deepEqual(result,
      new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999)
    )
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfYear(date)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})
