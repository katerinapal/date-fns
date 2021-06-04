import ext_assert from "power-assert";
import { endOfSecond as _endOfSecond } from "./";

describe('endOfSecond', function () {
  it('returns the date with the time setted to the last millisecond before a second ends', function () {
    var date = new Date(2014, 11, 1, 22, 15, 30)
    var result = _endOfSecond(date)
    ext_assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 30, 999))
  })

  it('accepts a string', function () {
    var result = _endOfSecond('2014-12-01T13:00:00.000Z')
    ext_assert.deepEqual(result, new Date(Date.UTC(2014, 11, 1, 13, 0, 0, 999)))
  })

  it('accepts a timestamp', function () {
    var result = _endOfSecond(new Date(2014, 11, 1, 22, 15, 45).getTime())
    ext_assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 45, 999))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 11, 1, 22, 15, 15, 300)
    _endOfSecond(date)
    ext_assert.deepEqual(date, new Date(2014, 11, 1, 22, 15, 15, 300))
  })
})
