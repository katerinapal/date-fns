import ext_assert from "power-assert";
import { setISODay as _setISODay } from "./";

describe('setISODay', function () {
  it('sets the day of the ISO week', function () {
    var result = _setISODay(new Date(2014, 8 /* Sep */, 1), 3)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 3))
  })

  it('sets the day to Sunday of this ISO week if the index is 7', function () {
    var result = _setISODay(new Date(2014, 8 /* Sep */, 1), 7)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7))
  })

  context('the day index is more than 7', function () {
    it('sets the day of the next ISO week', function () {
      var result = _setISODay(new Date(2014, 8 /* Sep */, 1), 8)
      ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 8))
    })

    it('sets the day of another ISO week in the future', function () {
      var result = _setISODay(new Date(2014, 8 /* Sep */, 1), 21)
      ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 21))
    })
  })

  context('the day index is less than 1', function () {
    it('sets the day of the last ISO week', function () {
      var result = _setISODay(new Date(2014, 8 /* Sep */, 1), 0)
      ext_assert.deepEqual(result, new Date(2014, 7 /* Aug */, 31))
    })

    it('set the day of another ISO week in the past', function () {
      var result = _setISODay(new Date(2014, 8 /* Sep */, 1), -13)
      ext_assert.deepEqual(result, new Date(2014, 7 /* Aug */, 18))
    })
  })

  it('accepts a string', function () {
    var result = _setISODay(new Date(2014, 8 /* Sep */, 1).toISOString(), 5)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 5))
  })

  it('accepts a timestamp', function () {
    var result = _setISODay(new Date(2014, 8 /* Sep */, 1).getTime(), 3)
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 3))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    var result = _setISODay(new Date(2014, 8 /* Sep */, 1), '3')
    ext_assert.deepEqual(result, new Date(2014, 8 /* Sep */, 3))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 8 /* Sep */, 1)
    _setISODay(date, 3)
    ext_assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})
