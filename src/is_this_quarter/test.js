import ext_assert from "power-assert";
import { isThisQuarter as _isThisQuarter } from "./";

describe('isThisQuarter', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date and the current date have the same quarter (and year)', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    ext_assert(_isThisQuarter(date) === true)
  })

  it('returns false if the given date and the current date have different quarters', function () {
    var date = new Date(2014, 1 /* Feb */, 11)
    ext_assert(_isThisQuarter(date) === false)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 6 /* Jul */, 2).toISOString()
    ext_assert(_isThisQuarter(date) === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    ext_assert(_isThisQuarter(date) === true)
  })
})
