import ext_assert from "power-assert";
import { isThisMonth as _isThisMonth } from "./";

describe('isThisMonth', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date and the current date have the same month (and year)', function () {
    var date = new Date(2014, 8 /* Sep */, 15)
    ext_assert(_isThisMonth(date) === true)
  })

  it('returns false if the given date and the current date have different months', function () {
    var date = new Date(2013, 7 /* Aug */, 31)
    ext_assert(_isThisMonth(date) === false)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 5).toISOString()
    ext_assert(_isThisMonth(date) === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 30).getTime()
    ext_assert(_isThisMonth(date) === true)
  })
})
