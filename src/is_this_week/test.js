import ext_assert from "power-assert";
import { isThisWeek as _isThisWeek } from "./";

describe('isThisWeek', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date and the current date have the same week', function () {
    var date = new Date(2014, 8 /* Sep */, 21)
    ext_assert(_isThisWeek(date) === true)
  })

  it('returns false if the given date and the current date have different weeks', function () {
    var date = new Date(2014, 8 /* Sep */, 29)
    ext_assert(_isThisWeek(date) === false)
  })

  it('allows to specify which day is the first day of the week', function () {
    var date = new Date(2014, 8 /* Sep */, 28)
    ext_assert(_isThisWeek(date, {weekStartsOn: 1}) === true)
  })

  it('implicitly converts options', function () {
    var date = new Date(2014, 8 /* Sep */, 28)
    // $ExpectedMistake
    ext_assert(_isThisWeek(date, {weekStartsOn: '1'}) === true)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 21).toISOString()
    ext_assert(_isThisWeek(date) === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 21).getTime()
    ext_assert(_isThisWeek(date) === true)
  })
})
