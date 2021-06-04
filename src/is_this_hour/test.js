import ext_assert from "power-assert";
import { isThisHour as _isThisHour } from "./";

describe('isThisHour', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date and the current date have the same hour', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18)
    ext_assert(_isThisHour(date) === true)
  })

  it('returns false if the given date and the current date have different hours', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 19)
    ext_assert(_isThisHour(date) === false)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 59, 59, 999).toISOString()
    ext_assert(_isThisHour(date) === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 45).getTime()
    ext_assert(_isThisHour(date) === true)
  })
})
