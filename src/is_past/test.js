import ext_assert from "power-assert";
import { isPast as _isPast } from "./";

describe('isPast', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date is in the past', function () {
    var result = _isPast(new Date(2014, 6 /* Jul */, 2))
    ext_assert(result === true)
  })

  it('returns false if the given date is in the future', function () {
    var result = _isPast(new Date(2014, 11 /* Dec */, 31))
    ext_assert(result === false)
  })

  it('returns false if the given date is now', function () {
    var result = _isPast(new Date(2014, 8 /* Sep */, 25))
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isPast(new Date(2014, 6 /* Jul */, 2).toISOString())
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isPast(new Date(2014, 6 /* Jul */, 2).getTime())
    ext_assert(result === true)
  })
})
