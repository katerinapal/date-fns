import ext_assert from "power-assert";
import { addMilliseconds as _addMilliseconds } from "./";

describe('addMilliseconds', function () {
  it('adds the given number of milliseconds', function () {
    var result = _addMilliseconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0), 750)
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 750))
  })

  it('accepts a string', function () {
    var result = _addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).toISOString(), 500
    )
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 500))
  })

  it('accepts a timestamp', function () {
    var result = _addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).getTime(), 500
    )
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 500))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _addMilliseconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 5), '750')
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 755))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0)
    _addMilliseconds(date, 250)
    ext_assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0))
  })
})
