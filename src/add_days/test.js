import ext_assert from "power-assert";
import { addDays as _addDays } from "./";

describe('addDays', function () {
  it('adds the given number of days', function () {
    var result = _addDays(new Date(2014, 8 /* Sep */, 1), 10)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('accepts a string', function () {
    var result = _addDays(new Date(2014, 8 /* Sep */, 1).toISOString(), 10)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('accepts a timestamp', function () {
    var result = _addDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _addDays(new Date(2014, 8 /* Sep */, 1), '10')
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 11))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    _addDays(date, 11)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})
