import ext_assert from "power-assert";
import { endOfMinute as _endOfMinute } from "./";

describe('endOfMinute', function () {
  it('returns the date with the time setted to the last millisecond before a minute ends', function () {
    var date = new Date(2014, 11, 1, 22, 15)
    var result = _endOfMinute(date)
    ext_assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999))
  })

  it('accepts a string', function () {
    var result = _endOfMinute('2014-12-01T13:00:00.000Z')
    ext_assert.deepEqual(result, new Date(Date.UTC(2014, 11, 1, 13, 0, 59, 999)))
  })

  it('accepts a timestamp', function () {
    var result = _endOfMinute(new Date(2014, 11, 1, 22, 15).getTime())
    ext_assert.deepEqual(result, new Date(2014, 11, 1, 22, 15, 59, 999))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 11, 1, 22, 15)
    _endOfMinute(date)
    ext_assert.deepEqual(date, new Date(2014, 11, 1, 22, 15))
  })
})
