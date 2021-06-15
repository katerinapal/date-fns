import ext_assert from "power-assert";
import { compareDesc as _compareDesc } from "./";

describe('compareDesc', function () {
  it('returns 0 if the given dates are equal', function () {
    var result = _compareDesc(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1989, 6 /* Jul */, 10)
    )
    ext_assert(result === 0)
  })

  it('returns 1 if the first date is before the second one', function () {
    var result = _compareDesc(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10)
    )
    ext_assert(result === 1)
  })

  it('returns -1 if the first date is after the second one', function () {
    var result = _compareDesc(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    ext_assert(result === -1)
  })

  it('sorts the dates array in the reverse chronological order when function is passed as the argument to Array.prototype.sort()', function () {
    var unsortedArray = [
      new Date(1995, 6 /* Jul */, 2),
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10)
    ]

    var sortedArray = [
      new Date(1995, 6 /* Jul */, 2),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    ]

    var result = unsortedArray.sort(_compareDesc)

    ext_assert.deepEqual(result, sortedArray)
  })

  it('accepts strings', function () {
    var result = _compareDesc(
      new Date(1987, 1 /* Feb */, 11).toISOString(),
      new Date(1989, 6 /* Jul */, 10).toISOString()
    )
    ext_assert(result === 1)
  })

  it('accepts timestamps', function () {
    var result = _compareDesc(
      new Date(1987, 1 /* Feb */, 11).getTime(),
      new Date(1989, 6 /* Jul */, 10).getTime()
    )
    ext_assert(result === 1)
  })
})
