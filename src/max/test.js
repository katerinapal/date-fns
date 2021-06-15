import ext_assert from "power-assert";
import { max as _max } from "./";

describe('max', function () {
  it('returns the latest date', function () {
    var result = _max(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    ext_assert.deepEqual(result, new Date(1989, 6 /* Jul */, 10))
  })

  it('allows to pass more than 2 arguments', function () {
    var result = _max(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1995, 6 /* Jul */, 2),
      new Date(1990, 0 /* Jan */, 1)
    )
    ext_assert.deepEqual(result, new Date(1995, 6 /* Jul */, 2))
  })

  it('accepts strings', function () {
    var result = _max(
      new Date(1987, 1 /* Feb */, 11).toISOString(),
      new Date(1989, 6 /* Jul */, 10).toISOString()
    )
    ext_assert.deepEqual(result, new Date(1989, 6 /* Jul */, 10))
  })

  it('accepts timestamps', function () {
    var result = _max(
      new Date(1989, 6 /* Jul */, 10).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime()
    )
    ext_assert.deepEqual(result, new Date(1989, 6 /* Jul */, 10))
  })
})
