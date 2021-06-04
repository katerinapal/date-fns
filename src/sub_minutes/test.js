import ext_assert from "power-assert";
import { subMinutes as _subMinutes } from "./";

describe('subMinutes', function () {
  it('subtracts the given number of minutes', function () {
    var result = _subMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30)
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 11, 30))
  })

  it('accepts a string', function () {
    var result = _subMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 0).toISOString(), 20
    )
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 11, 40))
  })

  it('accepts a timestamp', function () {
    var result = _subMinutes(
      new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(), 20
    )
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 11, 40))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _subMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), '30')
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 11, 30))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 0)
    _subMinutes(date, 25)
    ext_assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 0))
  })
})
