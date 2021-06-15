import ext_assert from "power-assert";
import { isSoLastWeek as _isSoLastWeek } from "./";

describe('isSoLastWeek', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date is so last week', function () {
    var date = new Date(2014, 8 /* Sep */, 18)
    ext_assert(_isSoLastWeek(date) === true)
  })

  it('returns false if the given date is totally this week', function () {
    var date = new Date(2014, 8 /* Sep */, 24)
    ext_assert(_isSoLastWeek(date) === false)
  })

  it('returns false if the given date is so beyond last week', function () {
    var date = new Date(2013, 7 /* Aug */, 31)
    ext_assert(_isSoLastWeek(date) === false)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 18).toISOString()
    ext_assert(_isSoLastWeek(date) === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 18).getTime()
    ext_assert(_isSoLastWeek(date) === true)
  })
})
