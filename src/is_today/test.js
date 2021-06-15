import ext_assert from "power-assert";
import { isToday as _isToday } from "./";

describe('isToday', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date is today', function () {
    var result = _isToday(new Date(2014, 8 /* Sep */, 25))
    ext_assert(result === true)
  })

  it('returns false if the given date is not today', function () {
    var result = _isToday(new Date(2014, 8 /* Sep */, 26))
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isToday(new Date(2014, 8 /* Sep */, 25).toString())
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isToday(new Date(2014, 8 /* Sep */, 25).getTime())
    ext_assert(result === true)
  })
})
