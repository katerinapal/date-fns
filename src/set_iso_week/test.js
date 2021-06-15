import ext_assert from "power-assert";
import { setISOWeek as _setISOWeek } from "./";

describe('setISOWeek', function () {
  it('sets the ISO week', function () {
    var result = _setISOWeek(new Date(2004, 7 /* Aug */, 7), 53)
    ext_assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('accepts a string', function () {
    var result = _setISOWeek(new Date(2009, 11 /* Dec */, 2).toISOString(), 1)
    ext_assert.deepEqual(result, new Date(2008, 11 /* Dec */, 31))
  })

  it('accepts a timestamp', function () {
    var result = _setISOWeek(new Date(2009, 11 /* Dec */, 2).getTime(), 1)
    ext_assert.deepEqual(result, new Date(2008, 11 /* Dec */, 31))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _setISOWeek(new Date(2004, 7 /* Aug */, 7), '53')
    ext_assert.deepEqual(result, new Date(2005, 0 /* Jan */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    _setISOWeek(date, 52)
    ext_assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })

  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0)
    initialDate.setFullYear(4, 0 /* Jan */, 4)
    initialDate.setHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(4, 11 /* Dec */, 26)
    expectedResult.setHours(0, 0, 0, 0)
    var result = _setISOWeek(initialDate, 52)
    ext_assert.deepEqual(result, expectedResult)
  })
})
