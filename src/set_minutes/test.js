import ext_assert from "power-assert";
import { setMinutes as _setMinutes } from "./";

describe('setMinutes', function () {
  it('sets the minutes', function () {
    var result = _setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), 45)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 45, 40))
  })

  it('accepts a string', function () {
    var result = _setMinutes(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 18))
  })

  it('accepts a timestamp', function () {
    var result = _setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30).getTime(), 5)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 5))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), '45')
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 45, 40))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30)
    _setMinutes(date, 15)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30))
  })
})
