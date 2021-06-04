import ext_assert from "power-assert";
import { isSameISOWeek as _isSameISOWeek } from "./";

describe('isSameISOWeek', function () {
  it('returns true if the given dates have the same ISO week', function () {
    var result = _isSameISOWeek(
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 8 /* Sep */, 7)
    )
    ext_assert(result === true)
  })

  it('returns false if the given dates have different ISO weeks', function () {
    var result = _isSameISOWeek(
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 8 /* Sep */, 14)
    )
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isSameISOWeek(
      new Date(2014, 5 /* Jun */, 30).toISOString(),
      new Date(2014, 6 /* Jul */, 2).toISOString()
    )
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isSameISOWeek(
      new Date(2014, 5 /* Jun */, 30).getTime(),
      new Date(2014, 6 /* Jul */, 2).getTime()
    )
    ext_assert(result === true)
  })
})
