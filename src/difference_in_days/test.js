import ext_assert from "power-assert";
import { differenceInDays as _differenceInDays } from "./";

describe('differenceInDays', function () {
  it('returns the number of full days between the given dates', function () {
    var result = _differenceInDays(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    ext_assert(result === 366)
  })

  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = _differenceInDays(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    ext_assert(result === -366)
  })

  it('accepts strings', function () {
    var result = _differenceInDays(
      new Date(2014, 6 /* Jul */, 1, 23, 59, 59, 999).toISOString(),
      new Date(2014, 0 /* Jan */, 1).toISOString()
    )
    ext_assert(result === 181)
  })

  it('accepts timestamps', function () {
    var result = _differenceInDays(
      new Date(2014, 8 /* Sep */, 5, 18, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 6, 0).getTime()
    )
    ext_assert(result === 1)
  })

  describe('edge cases', function () {
    it('the difference is less than a day, but the given dates are in different calendar days', function () {
      var result = _differenceInDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 4, 23, 59)
      )
      ext_assert(result === 0)
    })

    it('the same for the swapped dates', function () {
      var result = _differenceInDays(
        new Date(2014, 8 /* Sep */, 4, 23, 59),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      ext_assert(result === 0)
    })

    it('the time values of the given dates are the same', function () {
      var result = _differenceInDays(
        new Date(2014, 8 /* Sep */, 6, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      ext_assert(result === 1)
    })

    it('the given dates are the same', function () {
      var result = _differenceInDays(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      ext_assert(result === 0)
    })
  })
})
