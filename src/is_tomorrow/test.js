import ext_assert from "power-assert";
import { isTomorrow as _isTomorrow } from "./";

describe('isTomorrow', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Aug */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date is tomorrow', function () {
    var result = _isTomorrow(new Date(2014, 8 /* Sep */, 26))
    ext_assert(result === true)
  })

  it('returns false if the given date is not tomorrow', function () {
    var result = _isTomorrow(new Date(2014, 8 /* Sep */, 25))
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isTomorrow(new Date(2014, 8 /* Sep */, 26).toString())
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isTomorrow(new Date(2014, 8 /* Sep */, 26).getTime())
    ext_assert(result === true)
  })
})
