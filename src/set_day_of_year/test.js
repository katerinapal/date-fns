import ext_assert from "power-assert";
import { setDayOfYear as _setDayOfYear } from "./";

describe('setDayOfYear', function () {
  it('sets the day of the year', function () {
    var result = _setDayOfYear(new Date(2014, 6 /* Jul */, 2), 2)
    ext_assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2))
  })

  it('accepts a string', function () {
    var result = _setDayOfYear(new Date(2014, 6 /* Jul */, 2).toISOString(), 60)
    ext_assert.deepEqual(result, new Date(2014, 2 /* Mar */, 1))
  })

  it('accepts a timestamp', function () {
    var result = _setDayOfYear(new Date(2014, 6 /* Jul */, 2).getTime(), 60)
    ext_assert.deepEqual(result, new Date(2014, 2 /* Mar */, 1))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _setDayOfYear(new Date(2014, 6 /* Jul */, 2), '2')
    ext_assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 2)
    _setDayOfYear(date, 365)
    ext_assert.deepEqual(date, new Date(2014, 6 /* Jul */, 2))
  })
})
