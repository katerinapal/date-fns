import ext_assert from "power-assert";
import { isSameWeek as _isSameWeek } from "./";

describe('isSameWeek', function () {
  it('returns true if the given dates have the same week', function () {
    var result = _isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4)
    )
    ext_assert(result === true)
  })

  it('returns false if the given dates have different weeks', function () {
    var result = _isSameWeek(
      new Date(2014, 7 /* Aug */, 30),
      new Date(2014, 8 /* Sep */, 4)
    )
    ext_assert(result === false)
  })

  it('allows to specify which day is the first day of the week', function () {
    var result = _isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      {weekStartsOn: 1}
    )
    ext_assert(result === false)
  })

  it('implicitly converts options', function () {
    var result = _isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      // $ExpectedMistake
      {weekStartsOn: '1'}
    )
    ext_assert(result === false)
  })

  it('accepts a string', function () {
    var result = _isSameWeek(
      new Date(2014, 7 /* Aug */, 31).toISOString(),
      new Date(2014, 8 /* Sep */, 4).toISOString()
    )
    ext_assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = _isSameWeek(
      new Date(2014, 7 /* Aug */, 31).getTime(),
      new Date(2014, 8 /* Sep */, 4).getTime()
    )
    ext_assert(result === true)
  })
})
