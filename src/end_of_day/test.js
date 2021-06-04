import ext_assert from "power-assert";
import { endOfDay as _endOfDay } from "./";

describe('endOfDay', function () {
  it('returns the date with the time setted to 23:59:59.999', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = _endOfDay(date)
    ext_assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999)
    )
  })

  it('accepts a string', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString()
    var result = _endOfDay(date)
    ext_assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999)
    )
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    var result = _endOfDay(date)
    ext_assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999)
    )
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    _endOfDay(date)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})
