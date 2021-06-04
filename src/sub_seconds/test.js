import ext_assert from "power-assert";
import { subSeconds as _subSeconds } from "./";

describe('subSeconds', function () {
  it('subtracts the given number of seconds', function () {
    var result = _subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), 30)
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 30))
  })

  it('accepts a string', function () {
    var result = _subSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0).toISOString(), 20
    )
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 40))
  })

  it('accepts a timestamp', function () {
    var result = _subSeconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 0).getTime(), 20
    )
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 40))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), '30')
    ext_assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 44, 30))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 45, 0)
    _subSeconds(date, 15)
    ext_assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 0))
  })
})
