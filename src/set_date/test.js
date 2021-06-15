import ext_assert from "power-assert";
import { setDate as _setDate } from "./";

describe('setDate', function () {
  it('sets the day of the month', function () {
    var result = _setDate(new Date(2014, 8 /* Sep */, 1), 30)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('accepts a string', function () {
    var result = _setDate(new Date(2014, 8 /* Sep */, 1).toISOString(), 18)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 18))
  })

  it('accepts a timestamp', function () {
    var result = _setDate(new Date(2014, 8 /* Sep */, 1).getTime(), 25)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 25))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _setDate(new Date(2014, 8 /* Sep */, 1), '30')
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    _setDate(date, 20)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})
