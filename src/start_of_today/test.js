import ext_assert from "power-assert";
import { startOfToday as _startOfToday } from "./";

describe('startOfToday', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns the current date with the time setted to 00:00:00', function () {
    var result = _startOfToday()
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 25))
  })
})
