import ext_assert from "power-assert";
import { isEqual as _isEqual } from "./";

describe('isEqual', function () {
  it('returns true if the given dates are equal', function () {
    var result = _isEqual(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1987, 1 /* Feb */, 11)
    )
    ext_assert(result === true)
  })

  it('returns false if the given dates are not equal', function () {
    var result = _isEqual(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isEqual(
      new Date(1987, 1 /* Feb */, 11).toISOString(),
      new Date(1987, 1 /* Feb */, 11).toISOString()
    )
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isEqual(
      new Date(1987, 1 /* Feb */, 11).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime()
    )
    ext_assert(result === true)
  })
})
