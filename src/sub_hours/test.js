import ext_assert from "power-assert";
import { subHours as _subHours } from "./";

describe('subHours', function () {
  it('subtracts the given numbers of hours', function () {
    var result = _subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), 2)
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('accepts a string', function () {
    var result = _subHours(
      new Date(2014, 6 /* Jul */, 12, 1, 0).toISOString(), 26
    )
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('accepts a timestamp', function () {
    var result = _subHours(
      new Date(2014, 6 /* Jul */, 12, 1, 0).getTime(), 26
    )
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _subHours(new Date(2014, 6 /* Jul */, 11, 1, 0), '2')
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 10, 23, 0)
    _subHours(date, 10)
    ext_assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 23, 0))
  })
})
