import ext_assert from "power-assert";
import { isBefore as _isBefore } from "./";

describe('isBefore', function () {
  it('returns true if the first date is before the second one', function () {
    var result = _isBefore(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10)
    )
    ext_assert(result === true)
  })

  it('returns false if the first date is after the second one', function () {
    var result = _isBefore(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    ext_assert(result === false)
  })

  it('returns false if the first date is equal to the second one', function () {
    var result = _isBefore(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1989, 6 /* Jul */, 10)
    )
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isBefore(
      new Date(1987, 1 /* Feb */, 11).toISOString(),
      new Date(1989, 6 /* Jul */, 10).toISOString()
    )
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isBefore(
      new Date(1987, 1 /* Feb */, 11).getTime(),
      new Date(1989, 6 /* Jul */, 10).getTime()
    )
    ext_assert(result === true)
  })
})
