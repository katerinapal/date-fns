import ext_assert from "power-assert";
import { differenceInISOYears as _differenceInISOYears } from "./";

describe('differenceInISOYears', function () {
  it('returns the number of full ISO week-numbering years between the given dates', function () {
    var result = _differenceInISOYears(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    ext_assert(result === 1)
  })

  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = _differenceInISOYears(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    ext_assert(result === -1)
  })

  it('accepts strings', function () {
    var result = _differenceInISOYears(
      new Date(2014, 0 /* Jan */, 1).toISOString(),
      new Date(2000, 0 /* Jan */, 1).toISOString()
    )
    ext_assert(result === 14)
  })

  it('accepts timestamps', function () {
    var result = _differenceInISOYears(
      new Date(2014, 6 /* Jul */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime()
    )
    ext_assert(result === 4)
  })

  it('handles dates before 100 AD', function () {
    var firstDate = new Date(0)
    firstDate.setFullYear(14, 0 /* Jan */, 1)
    firstDate.setHours(0, 0, 0, 0)
    var secondDate = new Date(0)
    secondDate.setFullYear(0, 0 /* Jan */, 1)
    secondDate.setHours(0, 0, 0, 0)
    var result = _differenceInISOYears(firstDate, secondDate)
    ext_assert(result === 14)
  })

  describe('edge cases', function () {
    it('the difference is less than an ISO year, but the given dates are in different calendar years', function () {
      var result = _differenceInISOYears(
        new Date(2012, 0 /* Jan */, 2),
        new Date(2012, 0 /* Jan */, 1)
      )
      ext_assert(result === 0)
    })

    it('the same for the swapped dates', function () {
      var result = _differenceInISOYears(
        new Date(2012, 0 /* Jan */, 1),
        new Date(2012, 0 /* Jan */, 2)
      )
      ext_assert(result === 0)
    })

    it('the ISO weeks and weekdays of the given dates are the same', function () {
      var result = _differenceInISOYears(
        new Date(2013, 11 /* Dec */, 30),
        new Date(2012, 0 /* Jan */, 2)
      )
      ext_assert(result === 2)
    })

    it('the given dates are the same', function () {
      var result = _differenceInISOYears(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      ext_assert(result === 0)
    })
  })
})
