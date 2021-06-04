import ext_assert from "power-assert";
import { addWeeks as _addWeeks } from "./";

describe('addWeeks', function () {
  it('adds the given number of weeks', function () {
    var result = _addWeeks(new Date(2014, 8 /* Sep */, 1), 4)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 29))
  })

  it('accepts a string', function () {
    var result = _addWeeks(new Date(2014, 8 /* Sep */, 1).toISOString(), 2)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 15))
  })

  it('accepts a timestamp', function () {
    var result = _addWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 8))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _addWeeks(new Date(2014, 8 /* Sep */, 1), '4')
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 29))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    _addWeeks(date, 2)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})
