import ext_assert from "power-assert";
import { getISODay as _getISODay } from "./";

describe('getISODay', function () {
  it('returns the day of the ISO week of the given date', function () {
    var result = _getISODay(new Date(2012, 1 /* Feb */, 29))
    ext_assert(result === 3)
  })

  it('returns 7 if the given day is Sunday', function () {
    var result = _getISODay(new Date(2014, 5 /* Jun */, 1))
    ext_assert(result === 7)
  })

  it('accepts a string', function () {
    var result = _getISODay(new Date(2014, 6 /* Jul */, 2).toISOString())
    ext_assert(result === 3)
  })

  it('accepts a timestamp', function () {
    var result = _getISODay(new Date(2014, 5 /* Jun */, 1).getTime())
    ext_assert(result === 7)
  })
})
