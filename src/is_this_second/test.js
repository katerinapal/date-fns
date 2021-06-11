import ext_assert from "power-assert";
import { isThisSecond as _isThisSecond } from "./";

describe('isThisSecond', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date and the current date have the same second', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 30, 15)
    ext_assert(_isThisSecond(date) === true)
  })

  it('returns false if the given date and the current date have different seconds', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 30, 16)
    ext_assert(_isThisSecond(date) === false)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 750).toISOString()
    ext_assert(_isThisSecond(date) === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 250).getTime()
    ext_assert(_isThisSecond(date) === true)
  })
})
