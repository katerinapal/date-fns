import ext_assert from "power-assert";
import { startOfHour as _startOfHour } from "./";

describe('startOfHour', function () {
  it('returns the date with the time setted to the first millisecond of an hour', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55)
    var result = _startOfHour(date)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 11))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55)
    _startOfHour(date)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55))
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55).getTime()
    var result = _startOfHour(date)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 2, 11))
  })

  it('accepts a string', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 12, 45).toISOString()
    var result = _startOfHour(date)
    ext_assert.deepEqual(result, new Date(2014, 11, 1, 12, 0))
  })
})
