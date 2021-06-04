import ext_assert from "power-assert";
import { getTime as _getTime } from "./";

describe('getTime', function () {
  it('returns the timestamp of the given date', function () {
    var timestamp = 1483228800000
    var result = _getTime(new Date(timestamp))
    ext_assert(result === timestamp)
  })

  it('accepts a string', function () {
    var timestamp = 1484503736150
    var result = _getTime(new Date(timestamp).toISOString())
    ext_assert(result === timestamp)
  })

  it('accepts a timestamp (and returns it unchanged)', function () {
    var timestamp = 804643200000
    var result = _getTime(timestamp)
    ext_assert(result === timestamp)
  })
})
