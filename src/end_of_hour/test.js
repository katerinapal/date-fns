import ext_assert from "power-assert";
import { endOfHour as _endOfHour } from "./";

describe('endOfHour', function () {
  it('returns the date with the time setted to the last millisecond before an hour ends', function () {
    var date = new Date(2014, 11, 1, 22, 15)
    var result = _endOfHour(date)
    ext_assert.deepEqual(result, new Date(2014, 11, 1, 22, 59, 59, 999))
  })

  it('accepts a string', function () {
    var date = new Date(2014, 11, 1, 13).toISOString()
    var result = _endOfHour(date)
    ext_assert.deepEqual(result, new Date(2014, 11, 1, 13, 59, 59, 999))
  })

  it('accepts a timestamp', function () {
    var result = _endOfHour(new Date(2014, 11, 1, 22, 15).getTime())
    ext_assert.deepEqual(result, new Date(2014, 11, 1, 22, 59, 59, 999))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 11, 1, 22, 15)
    _endOfHour(date)
    ext_assert.deepEqual(date, new Date(2014, 11, 1, 22, 15))
  })
})
