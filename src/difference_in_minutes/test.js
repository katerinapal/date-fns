import ext_assert from "power-assert";
import { differenceInMinutes as _differenceInMinutes } from "./";

describe('differenceInMinutes', function () {
  it('returns the number of minutes between the given dates', function () {
    var result = _differenceInMinutes(
      new Date(2014, 6 /* Jul */, 2, 12, 20),
      new Date(2014, 6 /* Jul */, 2, 12, 6)
    )
    ext_assert(result === 14)
  })

  it('returns a negative number if the time value of the first date is smaller', function () {
    var result = _differenceInMinutes(
      new Date(2014, 6 /* Jul */, 2, 12, 6),
      new Date(2014, 6 /* Jul */, 2, 12, 20)
    )
    ext_assert(result === -14)
  })

  it('accepts strings', function () {
    var result = _differenceInMinutes(
      new Date(2014, 6 /* Jul */, 2, 23, 59, 59, 999).toISOString(),
      new Date(2014, 6 /* Jul */, 2, 23).toISOString()
    )
    ext_assert(result === 59)
  })

  it('accepts timestamps', function () {
    var result = _differenceInMinutes(
      new Date(2014, 8 /* Sep */, 5, 18, 45).getTime(),
      new Date(2014, 8 /* Sep */, 5, 18, 15).getTime()
    )
    ext_assert(result === 30)
  })

  describe('edge cases', function () {
    it('the difference is less than a minute, but the given dates are in different calendar minutes', function () {
      var result = _differenceInMinutes(
        new Date(2014, 8 /* Sep */, 5, 12, 12),
        new Date(2014, 8 /* Sep */, 5, 12, 11, 59)
      )
      ext_assert(result === 0)
    })

    it('the same for the swapped dates', function () {
      var result = _differenceInMinutes(
        new Date(2014, 8 /* Sep */, 5, 12, 11, 59),
        new Date(2014, 8 /* Sep */, 5, 12, 12)
      )
      ext_assert(result === 0)
    })

    it('the difference is an integral number of minutes', function () {
      var result = _differenceInMinutes(
        new Date(2014, 8 /* Sep */, 5, 12, 25),
        new Date(2014, 8 /* Sep */, 5, 12, 15)
      )
      ext_assert(result === 10)
    })

    it('the given dates are the same', function () {
      var result = _differenceInMinutes(
        new Date(2014, 8 /* Sep */, 5, 0, 0),
        new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      ext_assert(result === 0)
    })
  })
})
