import ext_assert from "power-assert";
import { min as _min } from "./";

describe('min', function () {
  it('returns the earliest date', function () {
    var result = _min(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    ext_assert.deepEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('allows to pass more than 2 arguments', function () {
    var result = _min(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1985, 6 /* Jul */, 2),
      new Date(1990, 0 /* Jan */, 1)
    )
    ext_assert.deepEqual(result, new Date(1985, 6 /* Jul */, 2))
  })

  it('accepts strings', function () {
    var result = _min(
      new Date(1987, 1 /* Feb */, 11).toISOString(),
      new Date(1989, 6 /* Jul */, 10).toISOString()
    )
    ext_assert.deepEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('accepts timestamps', function () {
    var result = _min(
      new Date(1989, 6 /* Jul */, 10).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime()
    )
    ext_assert.deepEqual(result, new Date(1987, 1 /* Feb */, 11))
  })
})
