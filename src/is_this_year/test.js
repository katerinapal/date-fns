import ext_assert from "power-assert";
import { isThisYear as _isThisYear } from "./";

describe('isThisYear', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date and the current date have the same year', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    ext_assert(_isThisYear(date) === true)
  })

  it('returns false if the given date and the current date have different years', function () {
    var date = new Date(2015, 6 /* Jul */, 2)
    ext_assert(_isThisYear(date) === false)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 6 /* Jul */, 2).toISOString()
    ext_assert(_isThisYear(date) === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    ext_assert(_isThisYear(date) === true)
  })
})
