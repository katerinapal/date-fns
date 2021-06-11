import ext_assert from "power-assert";
import { setSeconds as _setSeconds } from "./";

describe('setSeconds', function () {
  it('sets the seconds', function () {
    var result = _setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 45)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500))
  })

  it('accepts a string', function () {
    var result = _setSeconds(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 18)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 0, 18))
  })

  it('accepts a timestamp', function () {
    var result = _setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 15).getTime(), 45)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _setSeconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), '45')
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40)
    _setSeconds(date, 15)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30, 40))
  })
})
