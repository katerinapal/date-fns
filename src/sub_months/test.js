import ext_assert from "power-assert";
import { subMonths as _subMonths } from "./";

describe('subMonths', function () {
  it('subtracts the given number of months', function () {
    var result = _subMonths(new Date(2015, 1 /* Feb */, 1), 5)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('accepts a string', function () {
    var result = _subMonths(new Date(2015, 8 /* Sep */, 1).toISOString(), 12)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function () {
    var result = _subMonths(new Date(2015, 8 /* Sep */, 1).getTime(), 12)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _subMonths(new Date(2015, 1 /* Feb */, 1), '5')
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    _subMonths(date, 12)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function () {
    var date = new Date(2014, 11 /* Dec */, 31)
    var result = _subMonths(date, 3)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(1, 2 /* Mar */, 31)
    initialDate.setHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(1, 1 /* Feb */, 28)
    expectedResult.setHours(0, 0, 0, 0)
    var result = _subMonths(initialDate, 1)
    ext_assert.deepEqual(result, expectedResult)
  })
})
