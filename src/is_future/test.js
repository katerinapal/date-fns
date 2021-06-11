import ext_assert from "power-assert";
import { isFuture as _isFuture } from "./";

describe('isFuture', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date is in the future', function () {
    var result = _isFuture(new Date(2014, 9 /* Oct */, 31))
    ext_assert(result === true)
  })

  it('returns false if the given date is in the past', function () {
    var result = _isFuture(new Date(2014, 8 /* Sep */, 1))
    ext_assert(result === false)
  })

  it('returns false if the given date is now', function () {
    var result = _isFuture(new Date(2014, 8 /* Sep */, 25))
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isFuture(new Date(2014, 9 /* Oct */, 31).toISOString())
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isFuture(new Date(2014, 9 /* Oct */, 31).getTime())
    ext_assert(result === true)
  })
})
