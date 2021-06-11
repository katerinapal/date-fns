import ext_assert from "power-assert";
import { isThisISOWeek as _isThisISOWeek } from "./";

describe('isSameISOWeek', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date and the current date have the same ISO week', function () {
    var date = new Date(2014, 8 /* Sep */, 22)
    ext_assert(_isThisISOWeek(date) === true)
  })

  it('returns false if the given date and the current date have different ISO weeks', function () {
    var date = new Date(2014, 8 /* Sep */, 21)
    ext_assert(_isThisISOWeek(date) === false)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 28).toISOString()
    ext_assert(_isThisISOWeek(date) === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 29).getTime()
    ext_assert(_isThisISOWeek(date) === false)
  })
})
