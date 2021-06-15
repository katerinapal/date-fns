import ext_assert from "power-assert";
import { setYear as _setYear } from "./";

describe('setYear', function () {
  it('sets the year', function () {
    var result = _setYear(new Date(2014, 8 /* Sep */, 1), 2013)
    ext_assert.deepEqual(result, new Date(2013, 8 /* Sep */, 1))
  })

  it('accepts a string', function () {
    var result = _setYear(new Date(2014, 8 /* Sep */, 1).toISOString(), 2016)
    ext_assert.deepEqual(result, new Date(2016, 8 /* Sep */, 1))
  })

  it('accepts a timestamp', function () {
    var result = _setYear(new Date(2014, 8 /* Sep */, 1).getTime(), 2016)
    ext_assert.deepEqual(result, new Date(2016, 8 /* Sep */, 1))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _setYear(new Date(2014, 8 /* Sep */, 1), '2013')
    ext_assert.deepEqual(result, new Date(2013, 8 /* Sep */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    _setYear(date, 2011)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})
