import ext_assert from "power-assert";
import { addQuarters as _addQuarters } from "./";

describe('addQuarters', function () {
  it('adds the given number of quarters', function () {
    var result = _addQuarters(new Date(2014, 8 /* Sep */, 1), 1)
    ext_assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1))
  })

  it('accepts a string', function () {
    var result = _addQuarters(new Date(2014, 8 /* Sep */, 1).toISOString(), 4)
    ext_assert.deepEqual(result, new Date(2015, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function () {
    var result = _addQuarters(new Date(2014, 8 /* Sep */, 1).getTime(), 4)
    ext_assert.deepEqual(result, new Date(2015, 8 /* Sep */, 1))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _addQuarters(new Date(2014, 8 /* Sep */, 1), '1')
    ext_assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    _addQuarters(date, 4)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function () {
    var date = new Date(2014, 11 /* Dec */, 31)
    var result = _addQuarters(date, 3)
    ext_assert.deepEqual(result, new Date(2015, 8 /* Sep */, 30))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(-1, 10 /* Nov */, 30)
    initialDate.setHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(0, 1 /* Feb */, 29)
    expectedResult.setHours(0, 0, 0, 0)
    var result = _addQuarters(initialDate, 1)
    ext_assert.deepEqual(result, expectedResult)
  })
})
