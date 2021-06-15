import ext_assert from "power-assert";
import { closestTo as _closestTo } from "./";

describe('closestTo', function () {
  it('returns the date from the given array closest to the given date', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    var result = _closestTo(date, [
      new Date(2015, 7 /* Aug */, 31),
      new Date(2012, 6 /* Jul */, 2)
    ])
    ext_assert.deepEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('works if the closest date from the given array is before the given date', function () {
    var date = new Date(2014, 6 /* Jul */, 2, 6, 30, 4, 500)
    var result = _closestTo(date, [
      new Date(2014, 6 /* Jul */, 2, 6, 30, 5, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900),
      new Date(2014, 6 /* Jul */, 2, 6, 30, 10)
    ])
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900))
  })

  it('accepts strings', function () {
    var date = new Date(2014, 6 /* Jul */, 2).toISOString()
    var result = _closestTo(date, [
      new Date(2012, 6 /* Jul */, 2).toISOString(),
      new Date(2015, 7 /* Aug */, 31).toISOString()
    ])
    ext_assert.deepEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('accepts timestamps', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    var result = _closestTo(date, [
      new Date(2015, 7 /* Aug */, 31).getTime(),
      new Date(2012, 6 /* Jul */, 2).getTime()
    ])
    ext_assert.deepEqual(result, new Date(2015, 7 /* Aug */, 31))
  })

  it('returns undefined if the given array is empty', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    var result = _closestTo(date, [])
    ext_assert(result === undefined)
  })

  it('throws an exception if the second argument is not an instance of Array', function () {
    var date = new Date(2014, 6 /* Jul */, 2).getTime()
    // $ExpectedMistake
    var block = _closestTo.bind(null, date, '')
    ext_assert.throws(block, TypeError, '[object String] is not an instance of Array')
  })
})
