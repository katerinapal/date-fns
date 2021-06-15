import ext_assert from "power-assert";
import { isYesterday as _isYesterday } from "./";

describe('isYesterday', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Aug */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date is yesterday', function () {
    var result = _isYesterday(new Date(2014, 8 /* Sep */, 24))
    ext_assert(result === true)
  })

  it('returns false if the given date is not yesterday', function () {
    var result = _isYesterday(new Date(2014, 8 /* Sep */, 25))
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isYesterday(new Date(2014, 8 /* Sep */, 24).toString())
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isYesterday(new Date(2014, 8 /* Sep */, 24).getTime())
    ext_assert(result === true)
  })
})
