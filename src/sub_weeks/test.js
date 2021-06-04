import ext_assert from "power-assert";
import { subWeeks as _subWeeks } from "./";

describe('subWeeks', function () {
  it('subtracts the given number of weeks', function () {
    var result = _subWeeks(new Date(2014, 8 /* Sep */, 1), 4)
    ext_assert.deepEqual(result, new Date(2014, 7 /* Aug */, 4))
  })

  it('accepts a string', function () {
    var result = _subWeeks(new Date(2014, 8 /* Sep */, 1).toISOString(), 2)
    ext_assert.deepEqual(result, new Date(2014, 7 /* Aug */, 18))
  })

  it('accepts a timestamp', function () {
    var result = _subWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1)
    ext_assert.deepEqual(result, new Date(2014, 7 /* Aug */, 25))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _subWeeks(new Date(2014, 8 /* Sep */, 1), '4')
    ext_assert.deepEqual(result, new Date(2014, 7 /* Aug */, 4))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    _subWeeks(date, 2)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})
