import ext_assert from "power-assert";
import { startOfSecond as _startOfSecond } from "./";

describe('startOfSecond', function () {
  it('returns the date with the time setted to the first millisecond of a second', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    var result = _startOfSecond(date)
    ext_assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15, 45))
  })

  it('accepts a string', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 13, 20, 30, 456).toISOString()
    var result = _startOfSecond(date)
    ext_assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 13, 20, 30))
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400).getTime()
    var result = _startOfSecond(date)
    ext_assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1, 22, 15, 45))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400)
    _startOfSecond(date)
    ext_assert.deepEqual(date, new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400))
  })
})
