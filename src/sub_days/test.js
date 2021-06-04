import ext_assert from "power-assert";
import { subDays as _subDays } from "./";

describe('subDays', function () {
  it('subtracts the given number of days', function () {
    var result = _subDays(new Date(2014, 8 /* Sep */, 1), 10)
    ext_assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('accepts a string', function () {
    var result = _subDays(new Date(2014, 8 /* Sep */, 1).toISOString(), 10)
    ext_assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('accepts a timestamp', function () {
    var result = _subDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    ext_assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _subDays(new Date(2014, 8 /* Sep */, 1), '10')
    ext_assert.deepEqual(result, new Date(2014, 7 /* Aug */, 22))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    _subDays(date, 11)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})
