import ext_assert from "power-assert";
import { endOfISOWeek as _endOfISOWeek } from "./";

describe('endOfISOWeek', function () {
  it('returns the date with the time setted to 23:59:59:999 and the date setted to the last day of an ISO week', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = _endOfISOWeek(date)
    ext_assert.deepEqual(result,
      new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999)
    )
  })

  it('accepts a string', function () {
    var date = new Date(2014, 6 /* Jul */, 2, 11, 55, 0).toISOString()
    var result = _endOfISOWeek(date)
    ext_assert.deepEqual(result,
      new Date(2014, 6 /* Jul */, 6, 23, 59, 59, 999)
    )
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 1 /* Feb */, 11, 11, 55, 0).getTime()
    var result = _endOfISOWeek(date)
    ext_assert.deepEqual(result,
      new Date(2014, 1 /* Feb */, 16, 23, 59, 59, 999)
    )
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    _endOfISOWeek(date)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })
})
