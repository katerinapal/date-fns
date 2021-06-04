import ext_assert from "power-assert";
import { setHours as _setHours } from "./";

describe('setHours', function () {
  it('sets the amount of hours', function () {
    var result = _setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), 4)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 4, 30))
  })

  it('accepts a string', function () {
    var result = _setHours(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 18))
  })

  it('accepts a timestamp', function () {
    var result = _setHours(new Date(2014, 8 /* Sep */, 1, 11).getTime(), 5)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 5))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), '4')
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 4, 30))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1, 11)
    _setHours(date, 12)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11))
  })
})
