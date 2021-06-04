import ext_assert from "power-assert";
import { setMilliseconds as _setMilliseconds } from "./";

describe('setMilliseconds', function () {
  it('sets the milliseconds', function () {
    var result = _setMilliseconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 300)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300))
  })

  it('accepts a string', function () {
    var result = _setMilliseconds(new Date(2014, 8 /* Sep */, 1, 11).toISOString(), 123)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 0, 0, 123))
  })

  it('accepts a timestamp', function () {
    var result = _setMilliseconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 750).getTime(), 755)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 755))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _setMilliseconds(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), '300')
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500)
    _setMilliseconds(date, 137)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500))
  })
})
